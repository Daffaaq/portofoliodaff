import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

const NavbarComponent = () => {
    return (
        <Navbar className="navbar-custom" expand="lg">
            <Navbar.Brand href="/">Beranda</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/tentang">Tentang</Nav.Link>
                    <Nav.Link href="/kontak">Kontak</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
