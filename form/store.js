/**
 * Created by Administrator on 2017/8/29 0029.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducer';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = compose(applyMiddleware(sagaMiddleware, logger), window.devToolsExtension ? window.devToolsExtension() : undefined)(createStore)(reducer, initialState);

    return {
        ...store,
        runSaga: sagaMiddleware.run
    }

}