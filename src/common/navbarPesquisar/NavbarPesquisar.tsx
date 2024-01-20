import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Spinnerapp from '../spinner/Spinnerapp';
import palavrasChaves from '../../scripts/palavras';

function NavbarPesquisar() {
    const [key, setKey] = useState<string>('');

    const pesquisar = () => {
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
        const keyword = searchInput.value.toLowerCase();

        if (palavrasChaves[keyword]) {
            const novaAba = window.open('', '_blank');
            if (novaAba) {
                novaAba.location.href = palavrasChaves[keyword];
            } else {
                alert('Não foi possível abrir uma nova aba. Verifique as configurações do seu navegador.');
            }
        } else {
            alert('Palavra chave não encontrada!');
        }
    }

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
                        <Nav.Link as={Link} to="/conversor">CONVERSOR</Nav.Link>
                        <Nav.Link as={Link} to="/calculadora">CALCULADORA</Nav.Link>
                        <Nav.Link as={Link} to="/matrizes">MATRIZES</Nav.Link>
                        <NavDropdown title="MÉT. NÚMERICOS" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/integrais">
                                INTEGRAIS
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/bisseccao">
                                BISSECCAO
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/graficos">GRÁFICOS</Nav.Link>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Pesquise aqui"
                            className="me-2"
                            aria-label="Search"
                            id='searchInput'
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                        />
                        <Button variant="outline-success" onClick={pesquisar}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPesquisar;
