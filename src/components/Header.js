import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class Header extends Component {
  render() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">E-School</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/*">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/loginStudent">Login as Student</Nav.Link>
            <Nav.Link href="/loginTeacher">Login as Teacher</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}
