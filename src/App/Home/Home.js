import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Home extends Component {
  
  
  render() {


    return (
      <Card style={{ width: '18rem' }}>

      <Card.Body>
        <Card.Title>Home Page</Card.Title>
        <Card.Text>
          Welcome to home page.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
    )
  }
}
