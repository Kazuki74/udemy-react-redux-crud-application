import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { postEvents } from '../actions'

class EventsNew extends Component {
  render() {

    return (
      <React.Fragment>
        <p>Hi!</p>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventsNew)
