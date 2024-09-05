import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {CartWidget} from './CartWidget'

export const NavBar = () => {
    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
          Home
          </Nav.Link>
            <Nav.Link as={NavLink} to="/category/facial">
            Facial
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/corporal">
            Corporal
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>


    )
}