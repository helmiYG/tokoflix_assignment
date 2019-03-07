import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap';

import './Detail.css'

export default class Detail extends Component {
  render() {
    return (
      <Container className="detail">
        <Row>
            <Col md={4}>
                <img src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg" alt="gambar" />
            </Col>
            <Col md={8}>
                <h1>detail</h1>
            </Col>
        </Row>
      </Container>
    )
  }
}
