import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Topo.css'
import { NavLink as Navigator, Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { CartContext } from '../../Providers/CartProvider'

function Topo(props) {
    const { numeroDeitems, nomeLog, setNomeLog } = React.useContext(CartContext)
    const [nome, setNome] = useState('')

    useEffect(() => {
        setNome(nomeLog)
    }, [nomeLog])

    function deslogar() {
        localStorage.removeItem('token')
        setNomeLog('')
    }

    return (
        <Navbar bg="light" expand="lg" className="nav-ecommerce">
            <Container fluid>
                <Link to="/">
                    {' '}
                    <Navbar.Brand>
                        <img
                            style={{ maxHeight: '35px' }}
                            src={'/Imagens/LogoPreta.png'}
                            alt="Logo da LBRW"
                        />
                    </Navbar.Brand>{' '}
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to="/" as={Navigator} href="#action1">
                            Home
                        </Nav.Link>

                        <NavDropdown
                            title="Masculino"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="#action3">
                                Casual
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Esportivo
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Festa
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Feminino"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="#action3">
                                Casual
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Esportivo
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Festa
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Infantil"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="#action3">
                                Casual
                            </NavDropdown.Item>
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

                    <section className="icones">
                        <div>
                            <svg
                                viewBox="0 0 1083 904"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipath="url(#clip0_1_2)">
                                    <path
                                        d="M0 295.53V249C1.31 241.77 2.54 234.53 4 227.32C24.36 123.18 84 50.66 184 16.4C284.69 -18.1 377.19 2.31999 457.38 72.99C478.77 91.84 498.38 112.77 518.54 132.92C525.95 140.32 532.83 148.25 540.3 156.32C544.94 151.95 547.76 149.39 550.48 146.72C574.84 122.72 598.32 97.78 623.68 74.9C701.68 4.52 792.53 -17.1 892.54 13.97C1089.54 75.14 1147.54 320.5 1000.44 466.97C859.84 606.97 718.893 746.637 577.6 885.97C553.85 909.49 529.2 909.45 505.5 885.97C364.5 746.37 223.517 606.747 82.55 467.1C45.1 430.02 19.55 386.2 7.41 334.82C4.31 321.84 2.43 308.63 0 295.53Z"
                                        fill="black"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="user-dropdown">
                            <img src="/Imagens/user-solid.png"></img>
                            <NavDropdown
                                title={`Bem vindo(a), ${nome}`}
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item
                                    className="item-dropdown"
                                    href="#action5"
                                >
                                    Minha conta
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    className="item-dropdown"
                                    href="#action5"
                                >
                                    Meus pedidos
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    onClick={() => deslogar()}
                                    className="item-dropdown"
                                    href={'#'}
                                >
                                    Sair
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>

                        <div>
                            <Link className="cart-button" to="/carrinho">
                                <img
                                    src={'/Imagens/shopping-bag-solid.png'}
                                    alt="Botão de carrinho de compras"
                                ></img>
                                <p>{numeroDeitems}</p>
                            </Link>
                        </div>
                    </section>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Topo
