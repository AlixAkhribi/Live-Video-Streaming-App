import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {

    renderInputError({ error, touched }) {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        // Change class name depending on if error or not // 
        const fieldClassName = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={fieldClassName}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderInputError(meta)}
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a title"
    }

    if (!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)