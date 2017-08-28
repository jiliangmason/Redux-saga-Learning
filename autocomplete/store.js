/**
 * Created by Administrator on 2017/8/25 0025.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducer';
//import rootSaga from './saga';

export default function configureStore(initialState) {
    /*const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware, logger()));
    sagaMiddleware.run(rootSaga);
    return store;*/

    const sagaMiddleware = createSagaMiddleware();
    const store = compose(applyMiddleware(sagaMiddleware, logger()), window.devToolsExtension ? window.devToolsExtension() : undefined)(createStore)(reducer, initialState);

    return {
        ...store,
        runSaga: sagaMiddleware.run
    }
}