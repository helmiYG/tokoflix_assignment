import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>List Film</h1>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>;
      </div>
    )
  }
}
