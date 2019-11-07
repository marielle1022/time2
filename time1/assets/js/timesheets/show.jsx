import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import { get_timesheet } from '../ajax';

function state2props(state, props) {
  let id = parseInt(props.id);
  return {id: id, timesheet: state.timesheets.get(id)};
}

 function TimesheetsShow({id, timesheet}) {
   let sheet = null;

   if (!timesheet) {
     get_timesheet(id);
     return (
       <div>
          <h1>Show Timesheet</h1>
          <p>Loading...</p>
        </div>
      );
    }
    // Question: what to put in return?
   return (
     <div>
        <h1>Show Timesheet</h1>
          // <img src={timesheet.data} />
        <p>Test: {timesheet.data}</p>
      </div> );
 }
 export default connect(state2props)(TimesheetsShow);
