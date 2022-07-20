import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Contact extends Component {
  
  
  render() {


    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <Card.Text>
          Please contact us in xxx-xxx-xxxx
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    )
  }
}