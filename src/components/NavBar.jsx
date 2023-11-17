import React from 'react'
import CartWidget from './CartWidget'
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar-editado" fixed="top">
        <Container fluid className='flex-navbar-editado'>
            <Link to={"/"}>
                <Navbar.Brand className='navbar-brand-editado'>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/img%2Flogo.png?alt=media&token=48205d74-2fb0-4404-bb37-879f5b9167de" className='navbar-brand-editado' alt="Logo de Insawear" fluid/>
                </Navbar.Brand>
            </Link>
            <div className="d-lg-none d-flex">
                <Link to={"/cart"}>
                    <CartWidget />
                </Link> 
                <Navbar.Toggle aria-controls="navbarScroll"/>
            </div>
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mx-auto my-2 my-lg-0">
                    <NavLink to={"/"} className='nav-link-editado'>Inicio</NavLink>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={`/category/todos`} className='nav-link-editado nav-dropdown-link'>Todos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/remeras"} className='nav-link-editado nav-dropdown-link'>Remeras</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/trajes"} className='nav-link-editado nav-dropdown-link'>Trajes</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/chombas"} className='nav-link-editado nav-dropdown-link'>Chombas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/camisas"} className='nav-link-editado nav-dropdown-link'>Camisas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/pantalones"} className='nav-link-editado nav-dropdown-link'>Pantalones</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to={"/locales"} className='nav-link-editado'>Locales</NavLink>
                </Nav>
            </Navbar.Collapse>
            <Link to={"/cart"} className='container-cart-widget-editado d-none d-lg-block'>
                <div className='container-cart-widget-editado d-none d-lg-block'>
                    <CartWidget />
                </div>
            </Link>
        </Container>
    </Navbar>
  )
}

export default NavBar