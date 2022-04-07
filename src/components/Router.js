import React, {Suspense, lazy} from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Home = lazy(() => import('./Home.js'))
const Myplaces = lazy(() => import('./Myplaces/Myplaces.js'))
const Dateslist = lazy(() => import('./DatesList/Dateslist.js'))
const Expensetrack = lazy(() => import('./Expensetrack/Expensetrack.js'))


function Router() {
    return (
      <BrowserRouter>
        <div className='Navbar'>
            <Navbar bg="light" expand="lg" variant="light" className='border-bottom border-success navbar-fixed-top'>
              <Container>
                <Navbar.Brand as={Link} to={'/'}>Wishlist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto ms-auto">
                    <Nav.Link as={Link} to={'/places'}>Places to visit</Nav.Link>
                    <Nav.Link as={Link} to={'/dates'}>Days to remember</Nav.Link>
                    <Nav.Link as={Link} to={'/expensetracker'}>Expense Tracker</Nav.Link>
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
        
          <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/'><Home/></Route>
            <Route path='/places'><Myplaces/></Route>
            <Route path='/dates'><Dateslist/></Route>
            <Route path='/expensetracker'><Expensetrack/></Route>
          </Suspense>
          </Switch>
        
      </BrowserRouter>
    )
}

export default Router
