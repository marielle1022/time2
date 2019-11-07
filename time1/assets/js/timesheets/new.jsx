// Much taken from Nat's Notes 16-spa

// PE = pegasi
// GR = griffins
// SI = sirens
// HI = hippocampi
// 1 -- grooming
// 2 -- training
// 3 -- feeding
// 4 -- tracking

// TODO: format timesheet as grid, hours per task
// TODO: for above, need to add fields to database? Make
// key "taskx" correspond to tuple?
// TODO: check to see if max is really capping at 8
// TODO: add key of job codes?
import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router';

import { submit_new_timesheet } from '../ajax';

function state2props(state) {
  return state.forms.new_timesheet;
}

class TimesheetsNew extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      redirect: null,
    }
  }

  redirect(path) {
    this.setState({redirct: path});
  }

  // BIG question: "changed" needed here, or needed just for files?
  // Seems to be re: whether can navigate away from something in-progress or
  // not -- but if so, how does this fit in w/ render?
  // Question: check params?!
  changed(data) {
    this.props.dispatch({
      type: 'CHANGE_NEW_TIMESHEET',
      data: data,
    });
  }

  timesheet_changed(ev) {
    let input = ev.target;
    let timesheet = null;
    // Question: include this somehow? What is this doing?
    // if (input.files.length > 0) {
    //   file = input.files[0]; }
    this.changed({timesheet: timesheet});
  }

  // Question: from notes -- not needed b/c no file? Or needed so user can
  // edit previous timesheets?
  // TODO if this funciton is used --change Form.Control (notes pg 148)
  // file_changed(ev) {
  //   let input = ev.target;
  //   let file = null;
  //   if (input.files.length > 0) {
  //   file = input.files[0]; }
  //        changed({file: file});
  //   }



// Question: check params?!
// function TimesheetsNew({dispatch}) {
//   function changed(data) {
//     dispatch({
//       type: 'CHANGE_NEW_TIMESHEET', data: data,
//     });
//   }

// Question: from notes -- not needed b/c no file? Or needed so user can
// edit previous timesheets?
// TODO if this funciton is used --change Form.Control (notes pg 148)
// function file_changed(ev) {
//   let input = ev.target;
//   let file = null;
//   if (input.files.length > 0) {
//   file = input.files[0]; }
//        changed({file: file});
//   }

// export default function TimesheetsNew(props) {

// Question: let {errors, dispatch} missing file, desc?!

// Question: file_changed in form control?
render() {
  // Question: what "params" to put here? (other than errors, dispatch)
  let {timesheet, errors, dispatch} = this.props;
  let error_msg = null;
  if (errors) {
    error_msg = <Alert variant="danger">{ errors }</Alert>;
  }

  if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />;
  }


  return (
    <div>
      <h1>New Timesheet</h1>
      { error_msg }
      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control as="input">
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="tasks">
        <Form.Label>Task 1</Form.Label>
        <Form.Control as="select">
          <option label=" "></option>
          <option>PE-1</option>
          <option>PE-2</option>
          <option>PE-3</option>
          <option>GR-3</option>
          <option>GR-4</option>
          <option>SI-4</option>
          <option>HI-1</option>
          <option>HI-3</option>
        </Form.Control>
        <Form.Label>Task 2</Form.Label>
        <Form.Control as="select">
          <option label=" "></option>
          <option>PE-1</option>
          <option>PE-2</option>
          <option>PE-3</option>
          <option>GR-3</option>
          <option>GR-4</option>
          <option>SI-4</option>
          <option>HI-1</option>
          <option>HI-3</option>
        </Form.Control>
        <Form.Label>Task 3</Form.Label>
        <Form.Control as="select">
          <option label=" "></option>
          <option>PE-1</option>
          <option>PE-2</option>
          <option>PE-3</option>
          <option>GR-3</option>
          <option>GR-4</option>
          <option>SI-4</option>
          <option>HI-1</option>
          <option>HI-3</option>
        </Form.Control>
        <Form.Label>Task 4</Form.Label>
        <Form.Control as="select">
          <option label=" "></option>
          <option>PE-1</option>
          <option>PE-2</option>
          <option>PE-3</option>
          <option>GR-3</option>
          <option>GR-4</option>
          <option>SI-4</option>
          <option>HI-1</option>
          <option>HI-3</option>
        </Form.Control>
        <Form.Label>Task 5</Form.Label>
        <Form.Control as="select">
          <option label=" "></option>
          <option>PE-1</option>
          <option>PE-2</option>
          <option>PE-3</option>
          <option>GR-3</option>
          <option>GR-4</option>
          <option>SI-4</option>
          <option>HI-1</option>
          <option>HI-3</option>
        </Form.Control>
        <Form.Label>Task 6</Form.Label>
        <Form.Control as="select">
          <option label=" "></option>
          <option>PE-1</option>
          <option>PE-2</option>
          <option>PE-3</option>
          <option>GR-3</option>
          <option>GR-4</option>
          <option>SI-4</option>
          <option>HI-1</option>
          <option>HI-3</option>
        </Form.Control>
        <Form.Label>Task 7</Form.Label>
        <Form.Control as="select">
          <option label=" "></option>
          <option>PE-1</option>
          <option>PE-2</option>
          <option>PE-3</option>
          <option>GR-3</option>
          <option>GR-4</option>
          <option>SI-4</option>
          <option>HI-1</option>
          <option>HI-3</option>
        </Form.Control>
        <Form.Label>Task 8</Form.Label>
        <Form.Control as="select">
          <option label=" "></option>
          <option>PE-1</option>
          <option>PE-2</option>
          <option>PE-3</option>
          <option>GR-3</option>
          <option>GR-4</option>
          <option>SI-4</option>
          <option>HI-1</option>
          <option>HI-3</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="totalhours">
        <Form.Label>Total Number of Hours</Form.Label>
        <Form.Control as="input" max="8">
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="submit">
        <Button variant="primary"
                onClick={() => submit_new_timesheet(this)}>
                Submit</Button>
      </Form.Group>
    </div>
  );
}
}


export default connect(state2props)(TimesheetsNew);
