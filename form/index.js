/**
 * Created by Administrator on 2017/8/29 0029.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './app';
import configureStore from './store';
import rootSaga from './saga';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('container'));