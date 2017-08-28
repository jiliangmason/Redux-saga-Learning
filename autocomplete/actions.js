/**
 * Created by Administrator on 2017/8/26 0026.
 */
import {createAction} from 'redux-actions';

export const REQUEST_SUGGEST = 'REQUEST_SUGGEST';
export const SUCCESS_SUGGEST = 'SUCCESS_SUGGEST';
export const FAILURE_SUGGEST = 'FAILURE_SUGGEST';

/*
* createAction返回一个函数，createAction(type, actionCreator, metaCreator)
* result = createAction(type, actionCreator, metaCreator)
* result(...arg)
* 返回：{
*   type,
*   payload: actionCreator(...arg), //需要创建的action
*   error,
*   meta: metaCreator(...args) //action属性
* }
* */
export const requestSuggest = createAction(REQUEST_SUGGEST);
export const successSuggest = createAction(SUCCESS_SUGGEST);
export const failureSuggest = createAction(FAILURE_SUGGEST);

export const CLEAR_SUGGEST = 'CLEAR_SUGGEST';
export const clearSuggest = createAction(CLEAR_SUGGEST);

export const SET_KEYWORD = 'SET_KEYWORD';
export const CLEAR_KEYWORD = 'CLEAR_KEYWORD';
export const setKeyword = createAction(SET_KEYWORD);
export const clearKeyword = createAction(CLEAR_KEYWORD);
