/**
 * Created by Administrator on 2017/8/26 0026.
 */
import {delay} from 'redux-saga';
import {call, put, fork, take} from 'redux-saga/effects';
import {REQUEST_SUGGEST, successSuggest, failureSuggest} from './actions';
import API from './api';

function *runRequestSuggest(text) {
    const {data, error} = yield call(API.suggest, text);
    if (data && !error) {
        yield put(successSuggest({data}));
        //put ({type: SUCCESS_SUGGEST, payload: {data}})
    }
    else {
        yield put(failureSuggest({error}));
    }
}

function createLazy(msec = 1000) {
    let ongoing;
    return function *(task, ...args) {
        if (ongoing && ongoing.isRunning()) {
            ongoing.cancel();
        }
        //ongoing: 是一个task对象，当任务进行中取消

        ongoing = yield fork(function *() {
            yield call(delay, msec);
            yield fork(task, ...args);
        });
    }; //task: runRequestSuggest; ...args: payload
}

function* handleRequestSuggest() {
    const lazy = createLazy();
    while(true) {
        const {payload} = yield take(REQUEST_SUGGEST); //由App组件发出action,见app.js的handleSuggest函数
        yield fork(lazy, runRequestSuggest, payload); //payload为初始输入值
    }

}

export default function *rootSaga() {
    yield fork(handleRequestSuggest);
}