import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default class Jobs extends Component {
  constructor(props) {
    super(props);
  
     this.state = {
        userInput: "",
        ToDoList:[]
    } 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
        ToDoList: itemsArray
    });

  }

  handleChange(e){
    this.setState({
        userInput: e.target.value
    });
  }
  
  
  render() {
    const style = {
        marginTop: "30px",
        marginRight: "50px",
        fontSize: "30px",
        color: "blue"
      };
      const liststyle = {
        marginTop: "30px",
        marginBottom: "30px"
      };


    return (
      <div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Jobs</Card.Title>
        <Card.Text>
          Here you can find plenty of jobs published.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
        <div style={style}>
            Add your wanted job:
        </div>
        <div style = {liststyle}>
            <textarea onChange={this.handleChange} value={this.state.userInput} 
                placeholder = "Separate Items With Commas"></textarea>
            <br></br>
            <Button variant="outline-primary" onClick={this.handleSubmit} style={liststyle}>Add</Button>{' '}
        </div>
        <ListGroup >
      {this.state.ToDoList.map((item,index)=>{
            return <ListGroup.Item key={index}>{item}</ListGroup.Item>
          })}
    </ListGroup>
      </div>
    )
  }
}

