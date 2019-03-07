import React, { Component } from 'react'

import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';

export default class NavbarLayout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="success" variant="light">
            <Navbar.Brand href="#home">Toko Flix</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="success">Search</Button>
            </Form>
        </Navbar>
      </div>
    )
  }
}
