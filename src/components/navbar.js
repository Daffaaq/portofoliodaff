import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavbarLink = ({ to, children }) => {
    return (
        <Nav.Link as={Link} to={to}>{children}</Nav.Link>
    );
};

const navbarLinks = [
    { to: '/', text: 'HOME' },
    { to: '/tentang', text: 'ABOUT' },
    { to: '/portofolio', text: 'PORTOFOLIO' },
    { to: '/kontak', text: 'CONTACT' }
];

const NavbarComponent = () => {
    return (
        <Navbar className="navbar-custom" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    {navbarLinks.map((link, index) => (
                        <NavbarLink key={index} to={link.to}>{link.text}</NavbarLink>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
