import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class About extends Component {
  
  
  render() {


    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
          We are helping every incoming graudrate students find their dream job.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    )
  }
}
