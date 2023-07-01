import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

const NavbarComponent = () => {
    return (
        <Navbar className="navbar-custom" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/tentang">ABOUT</Nav.Link>
                    <Nav.Link href="/portofolio">PORTOFOLIO</Nav.Link>
                    <Nav.Link href="/kontak">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
