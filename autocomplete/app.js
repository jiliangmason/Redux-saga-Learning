/**
 * Created by Administrator on 2017/8/25 0025.
 */
import React from 'react';
import {connect} from 'react-redux';
import Suggest from 'react-autosuggest';
import {setKeyword, requestSuggest, clearSuggest} from './actions';

class App extends React.Component {

    handleSuggest({value}) {
        this.props.dispatch(requestSuggest(value));
        // {
        // type: REQUEST_SUGGEST,
        // payload: value
        // }
    }

    handleClear() {
        this.props.dispatch(clearSuggest());
    }

    handleChange(ev, {newValue}) {
        this.props.dispatch(setKeyword(newValue));
        // {
        //  type: SET_KEYWORD,
        //  payload: newValue
        // }
    }

    render() {
        const {search: {suggests, keyword, suggest}} = this.props;
        const props = {
            value: keyword,
            onChange: this.handleChange.bind(this)
        };
        console.log('the suggests is:', this.props);
        return (<div>
            <h3>Type "C" to start suggestions. It starts completion lazily</h3>
            <Suggest suggestions={suggests?suggests:suggest} onSuggestionsFetchRequested={this.handleSuggest.bind(this)}
                     onSuggestionsClearRequested={this.handleClear.bind(this)}
                     renderSuggestion={s=> <span>{s.name}</span>}
                     getSuggestionValue={s=>s.name}
                     inputProps={props}
            />
        </div>)
    }

}

function mapStateToProps(state) {
    return {
        app: state.app,
        search: state.search
    }
}

export default connect(mapStateToProps)(App)