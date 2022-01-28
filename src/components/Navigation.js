import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function Navigation(props) {
    return (
        <section id='navigation'>
            <Navbar expand='md'>
                <NavbarBrand href='#'>
                    <img className='brandLogo' src='/Development-Portfolio/assets/images/ebklogo.png' />
                </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className='navItem' href="#about">
                            About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='navItem' href="#portfolio">
                            Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='navItem' href="#contact">
                            Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </section>
    );
}