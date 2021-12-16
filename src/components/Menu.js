import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import './Navbar.scss'

function Menu() {
    return (
        <div className='Navbar'>
            <Navbar bg="success" expand="lg" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Wishlist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto ms-auto">
                    <Nav.Link href="#places">Places to visit</Nav.Link>
                    <Nav.Link href="#todo">Things to do</Nav.Link>
                    <Nav.Link href="#days">Days to remember</Nav.Link>
                    <NavDropdown title="My profile" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Edit profile</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.2">Sign out</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}

export default Menu
