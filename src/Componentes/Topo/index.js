import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Topo.css"
import {NavLink as Navigator, Link} from "react-router-dom";




function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className='nav-ecommerce'>
      <Container fluid>
      <Link to='/'> <Navbar.Brand ><img
            style={{ maxHeight: '35px' }} src="/imagens/LogoPreta.png" /></Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={Navigator} href="#action1">Home</Nav.Link>

            <NavDropdown title="Masculino" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Casual</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Esportivo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Festa
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Feminino" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Casual</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Esportivo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Festa
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Infantil" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Casual</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Esportivo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Festa
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Digite o nome do item"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Pesquisar</Button>
          </Form>

        <section className='icones'>
            <div>
                <img src='/imagens/heart-solid.png' ></img>
            </div>
            <div>
                <img src='/imagens/user-solid.png' ></img>
            </div>
            <div>
                <img src='/imagens/shopping-bag-solid.png' ></img>
            </div>
        </section>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;