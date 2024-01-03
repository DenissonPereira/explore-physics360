import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Spinnerapp from '../../../common/spinner/Spinnerapp';



function NavScrollExample() {
  const nameProject = 'Explore Physics 360';

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary w-100" id='navbar'>
      <Container fluid>
        <Navbar.Brand href="#" id='logo'>
          {nameProject} <Spinnerapp />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/integrais">INTEGRAIS</Nav.Link>
            <Nav.Link as={Link} to="/conversor">CONVERSOR</Nav.Link>
            <Nav.Link as={Link} to="/calculadora">CALCULADORA</Nav.Link>
            <Nav.Link as={Link} to="/">NEWS</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;