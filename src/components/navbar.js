import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavbarLink = ({ to, children }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
    };

    return (
        <Nav.Link
            as={NavLink}
            to={to}
            activeClassName={isActive ? 'active' : ''}
            onClick={handleClick}
        >
            {children}
        </Nav.Link>
    );
};

const navItems = [
    { to: '/beranda', label: 'HOME' },
    { to: '/tentang', label: 'ABOUT' },
    { to: '/portofolio', label: 'PORTFOLIO' },
    { to: '/kontak', label: 'CONTACT' },
];

const NavbarComponent = () => {
    const renderNavItems = () => {
        return navItems.map((item, index) => (
            <Nav.Item className="navbarItem" key={index}>
                <NavbarLink to={item.to}>{item.label}</NavbarLink>
            </Nav.Item>
        ));
    };

    return (
        <Navbar className="navbar-custom" expand="lg">
            <Navbar.Brand className="navbar-left-element">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>{renderNavItems()}</Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;
