// Taken from NatTuck lens application
// NB: think this is specific to photos, but unsure -- trying b/c
// receiving "state.session null" error and want to test
// Question: particular issue is Card.Img

import React from 'react';
import ReactDOM from 'react-dom';

import { Card } from 'react-bootstrap';

export default function TimesheetCard({timesheet}) {
return (
  <Card className="col-4">
    <Card.Img src={photo.data} />
    <Card.Text>
      {timesheet.sheetname}
    </Card.Text>
  </Card>
);
}
