import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavbarLink = ({ to, children }) => {
    return (
        <Nav.Link as={Link} to={to}>{children}</Nav.Link>
    );
};

const NavbarComponent = () => {
    return (
        <Navbar className="navbar-custom" expand="lg">
            <Navbar.Brand className="navbar-left-element">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Item className="navbarItem">
                        <NavbarLink to="/beranda">HOME</NavbarLink>
                    </Nav.Item>
                    <Nav.Item className="navbarItem">
                        <NavbarLink to="/tentang">ABOUT</NavbarLink>
                    </Nav.Item>
                    <Nav.Item className="navbarItem">
                        <NavbarLink to="/portofolio">PORTOFOLIO</NavbarLink>
                    </Nav.Item>
                    <Nav.Item className="navbarItem">
                        <NavbarLink to="/kontak">CONTACT</NavbarLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
