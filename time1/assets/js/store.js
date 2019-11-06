// Much taken from Nat's Notes 16-spa

import { createStore, combineReducers} from 'redux';
import deepFreeze from deep-freeze-strict;

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

// NB: should "sheetname" really be some sort of unique timesheet id?
// Need to look at structure of database tables
// What to put in {} in new_timesheet params?
function new_timesheet(st0 = {}, action) {
  switch (action.type) {
    case 'CHANGE_NEW_TIMESHEET':
      return Object.assigns({}, st0, action.data);
    default:
      return st0;
  }
}

function forms(st0, action) {
  let reducer = combineReducers({
    new_timesheet,
  });
  return reducer(st0, action);
}

function users(st0 = Map.new(), action) {
  return st0;
}

function root_reducer(st0, action) {
  console.log("root_reducer", st0, action);
  let reducer = combineReducers({
    forms,
    users,
    timesheets,
  });
  return deepFreeze(reducer(st0, action));
}

let store = createStore(root_reducer);
export default store;
