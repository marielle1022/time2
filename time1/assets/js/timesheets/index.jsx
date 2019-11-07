// Much taken from NatTuck lens app

//Question: what's with the card thing? Needed in this project?
// Or some sort of corollary needed?

import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import _ from 'lodash';

import { list_timesheets } from '../ajax';
// import PhotoCard from './card';

let TimesheetsList = connect(({timesheets}) => ({timesheets}))(({timesheets}) => {
  // if (photos.size == 0) {
    list_timesheets();
  // }

  // let cards = _.map([...photos], ([_, photo]) => {
  //   return <PhotoCard key={photo.id} photo={photo} />;
  // });

  return (
    <div>
      <h1>Timesheets</h1>
      <div className="row">
        {timesheets}
      </div>
    </div>
  );
});

export default TimesheetsList;
