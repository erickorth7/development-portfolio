import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export default function Navigation(props) {
    return (
        <section id='navigation'>
            <Navbar
                expand='md'
            >
                <NavbarBrand href='#'>
                    <img className='brandLogo' src='/assets/images/ebklogo.png' />
                </NavbarBrand>
                {/* <NavbarToggler>
                    <Collapse> */}
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='navItem' href="#">
                                About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navItem' href="#">
                                Portfolio
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navItem' href="#">
                                Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    {/* </Collapse>
                </NavbarToggler> */}
            </Navbar>
        </section>
    );
}