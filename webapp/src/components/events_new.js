import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
    console.log(this.props.history)
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    console.log(submitting)
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>
          <div>
            <input type="submit" value="submit" disabled={pristine || submitting} />
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({ postEvent })

const validate = values => {
  let errors = {}
  if (!values.title) errors.title = 'Enter a title.'
  if (!values.body) errors.body = 'Enter a body.'
  return errors
}

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form: 'eventsNewForm'})(EventsNew)
)
