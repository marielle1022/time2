// Much taken from Nat's Notes 16-spa

import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze-strict';

/* Structure of store data:
NB: is password_hash right in user?
NB: Is id right in timesheets (compared to user_id)?
{
  forms: {
    new_timesheet: {...},
    edit_timesheet: {...},
    new_user: {...},
    edit_user: {...},
  },
  users: Map.new(
    1 => {id: 1, username: "alice1", name: "Alice", role: "worker",
          manager: "Bobbi", password_hash: pw}
  ),
  timesheets: Map.new(
    1 => {id: 1, sheetname: "May 1", task1: "PE-1", task2: "", task3: "",
          task4: "", task5: "", task6: "", task7: "", task8: "", numhours: 8}
  )
}
*/

// Question: should "sheetname" really be some sort of unique timesheet id?
// Need to look at structure of database tables
// What to put in {} in new_timesheet params?
function new_timesheet(st0 = {sheetname: "", errors: null}, action) {
  switch (action.type) {
    case 'CHANGE_NEW_TIMESHEET':
      return Object.assigns({}, st0, action.data);
    default:
      return st0;
  }
}

function login(st0 = {username: "", password: "", errors: null}, action) {
  switch(action.type) {
    case 'CHANGE_LOGIN':
      return Object.assign({}, st0, action.data);
    default:
      return st0;
  }
}

function forms(st0, action) {
  let reducer = combineReducers({
    new_timesheet,
    login,
  });
  return reducer(st0, action);
}

function users(st0 = new Map(), action) {
  return st0;
}

// Question: What to use instead of data? Or is data here referring to something
// other than photo data?
function timesheets(st0 = new Map(), action) {
  switch (action.type) {
  case 'ADD_TIMESHEETS':
    let st1 = new Map(st0);
    for (let timesheet of action.data) {
      st1.set(timesheet.id, timesheet);
    }
    return st1;
  default:
    return st0;
  }
}

let session0 = localStorage.getItem('session');
if (session0) {
  session0 = JSON.parse(session0);
}
function session(st0 = session0, action) {
  switch (action.type) {
    case 'LOG_IN':
      return action.data;
    case 'LOG_OUT':
      return null;
    default:
      return st0;
  }
}

//QUESTION: root_reducer?!?!
// forms, users, timesheets -- all refer to functions above
function root_reducer(st0, action) {
  console.log("root_reducer", st0, action);
  let reducer = combineReducers({
    forms,
    users,
    timesheets,
    session,
  });
  return deepFreeze(reducer(st0, action));
}

let store = createStore(root_reducer);
export default store;
