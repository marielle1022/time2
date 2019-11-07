// Much taken from NatTuck lens app

import store from './store';

export function post(path, body) {
   return fetch('/ajax' + path, {
    method: 'post',
    credentials: 'same-origin',
    headers: new Headers({
      'x-csrf-token': window.csrf_token,
      'content-type': "application/json; charset=UTF-8",
      'accept': 'application/json',
    }),
    body: JSON.stringify(body),
  }).then((resp) => resp.json());
}

export function get(path) {
  return fetch('/ajax' + path, {
    method: 'get',
    credentials: 'same-origin',
    headers: new Headers({
      'x-csrf-token': window.csrf_token,
      'content-type': "application/json; charset=UTF-8",
      'accept': 'application/json',
    }),
  }).then((resp) => resp.json());
}

// Question: is data correct?!
export function get_timesheet(id) {
  get('/timesheets/'+id)
    .then((resp) => {
        store.dispatch({
          type: 'ADD_TIMESHEETS',
          data: [resp.data],
        });
    });
}

export function list_timesheets() {
   get('/timesheets')
    .then((resp) => {
      console.log("list_timesheets", resp);
      store.dispatch({
        type: 'ADD_TIMESHEETS',
        data: resp.data,
      });
    });
}

// Question: in notes, param is "done" -- referring to what?
export function submit_new_timesheet(form) {
  let state = store.getState();
  console.log("state", state);
  let data = state.forms.new_timesheet;

  // QUESTION: what to do here?
  // if (data.file == null) {
  //   return;
  // }


  // Question: what to do about reader?
  // numhours: used to be numhours: reader.numhours -- use for addition?
  // Instead of reader, maybe add event listener to submit button?
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    post('/timesheets', {
      timesheet: {
        sheetname: data.sheetname,
        task1: data.task1,
        task2: data.task2,
        task3: data.task3,
        task4: data.task4,
        task5: data.task5,
        task6: data.task6,
        task7: data.task7,
        task8: data.task8,
        numhours: data.numhours,
        user_id: 1,
      }
    }).then((resp) => {
      console.log(resp);
      if (resp.data) {
        store.dispatch({
          type: 'ADD_TIMESHEETS',
          data: [resp.data],
        });
        form.redirect('/timesheets/' + resp.data.id);
      }
      else {
        store.dispatch({
          type: 'CHANGE_NEW_PHOTO',
          data: {errors: JSON.stringify(resp.errors)},
        });
      }
    });
  });

  // reader.readAsDataURL(data.file);
}
