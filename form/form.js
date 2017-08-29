/**
 * Created by Administrator on 2017/8/29 0029.
 */
import React from 'react';
import {Field, reduxForm} from 'redux-form';

class Form extends React.Component {
    /*
    * propTypes:是一个访问器只读属性，属于form的静态类型
    * */
    static get propTypes() {
        return {
            handleSubmit: PropTypes.func.isRequired,
            submitting: PropTypes.func.isRequired
        }
    }

    render() {
        const {handleSubmit, submitting} = this.props;
        return (<Form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field name="first" component="input" type="text" placeholder="First Name"/>
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field name="last" component="input" type="text" placeholder="Last Name"/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={submitting}>
                    {submitting ? <i/>:<i/>} Submit
                </button>
            </div>
        </Form>)
    }
}

export default reduxForm({
    form: 'redux'
})(Form);