import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

// import { postEvents } from '../actions'

class EventsNew extends Component {
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  render() {

    return (
      <React.Fragment>
        <form>
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>
          <div>
            <input type="submit" value="submit" disabled={false} />
          </div>
          <Link to="/">Submit</Link>
        </form>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// const mapDispatchToProps = ({ postEvents })

const validate = values => {
  let errors = {}
  if (!values.title) errors.title = 'Enter a title.'
  if (!values.body) errors.body = 'Enter a body.'
  return errors
}

export default connect(null, null)(
  reduxForm({validate, form: 'eventsNewForm'})(EventsNew)
)
