import React from 'react';
import Card from 'react-bootstrap/Card';

const bodyComponent = (props) => (
<Card style={{border: 0}}>
  <Card.Img variant="top" src={props.img} style={{backgroundColor: props.bg}}/>
</Card>
);

export default bodyComponent;