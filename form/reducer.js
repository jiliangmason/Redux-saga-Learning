/**
 * Created by Administrator on 2017/8/29 0029.
 */
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

const initial = {
    app: {}
};

function app(state = initial.app, action) {
    switch (action.type) {

    }
    return state;
}

export default combineReducers({
    app,
    form
})