// Much taken from Nat's Notes 16-spa

// PE = pegasi
// GR = griffin
// SI = siren
// HI = hippocampi
// 1 -- grooming
// 2 -- training
// 3 -- feeding
// 4 -- tracking

// TODO: format timesheet as grid, hours per task
// TODO: for above, need to add fields to database? Make
// key "taskx" correspond to tuple?
// TODO: check to see if max is really capping at 8
import React from 'react';
import ReactDOM from 'react-dom';

import { Form, Button} from 'react-bootstrap';

export default function TimesheetsNew(props) {
  return (
    <div>
      <h1>New Timesheet</h1>
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
        <Button variant="primary">Submit</Button>
      </Form.Group>
    </div>

  )
}
