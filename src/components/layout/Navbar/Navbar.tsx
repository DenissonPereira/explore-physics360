import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Spinnerapp from '../../../common/spinner/Spinnerapp';
import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface NavbarProps {
  brasil: boolean;
}


const NavScrollExample: React.FC<NavbarProps> = ({ brasil }) => {
  const [home, setHome] = useState('INÍCIO');
  const [integrais, setIntegrais] = useState('INTEGRAIS');
  const [conversorUnidades, setConversorUnidades] = useState('CONVERSOR');
  const [calcu, setCalcu] = useState('CALCULADORA');
  const [noticias, setNoticias] = useState('NOTÍCIAS');
  const [sobre, setSobre] = useState('SOBRE');
  const [matrizes, setMatrizes] = useState('MATRIZES');
  const [metodos, setMetodos] = useState('MÉT. NÚMERICOS');
  const [graficos, setGraficos] = useState('GRÁFICOS');
  const [derivadas, setDerivada] = useState('DERIVADAS');

  const nameProject = 'Explore Physics 360';

  useEffect(() => {

    if (brasil === false) {
      setHome('HOME');
      setIntegrais('INTEGRALS');
      setConversorUnidades('CONVERTER');
      setCalcu('CALCULATOR');
      setNoticias('NEWS');
      setSobre('ABOUT');
      setMatrizes('MATRIX');
      setMetodos('NUM. METHODS');
      setGraficos('GRAPHS');
      setDerivada('DERIVATIVES');
    } else {
      setHome('INÍCIO');
      setIntegrais('INTEGRAIS');
      setConversorUnidades('CONVERSOR');
      setCalcu('CALCULADORA');
      setNoticias('NOTÍCIAS');
      setSobre('SOBRE');
      setMatrizes('MATRIZES');
      setMetodos('MÉT. NÚMERICOS');
      setGraficos('GRÁFICOS');
      setDerivada('DERIVADAS');
    }
  }, [brasil]);

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
            <Nav.Link as={Link} to="/">{home}</Nav.Link>
            <Nav.Link as={Link} to="/derivadas">{derivadas}</Nav.Link>
            <Nav.Link as={Link} to="/conversor">{conversorUnidades}</Nav.Link>
            <Nav.Link as={Link} to="/calculadora">{calcu}</Nav.Link>
            <Nav.Link as={Link} to="/matrizes">{matrizes}</Nav.Link>
            <NavDropdown title={metodos} id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/integrais">
                {integrais}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/bisseccao">
                BISSECCAO
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/graficos">{graficos}</Nav.Link>
            <Nav.Link as={Link} to="/">{noticias}</Nav.Link>
            <Nav.Link as={Link} to="/about">{sobre}</Nav.Link>
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;