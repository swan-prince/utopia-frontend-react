//import React, {Component} from 'react';
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const footerUpdated = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);
  const data = [
    { firstName: "jane", lastName: "doe", age: 20 },
    { firstName: "john", lastName: "smith", age: 21 }
  ];
  return (
    <div>
<table><tr><td>
    <h5>Current state: {status}</h5>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
      </td></tr></table>
      
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <table><tr><td>test</td><td>test</td></tr></table>
      </Collapse>



    </div>
  );
}