
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar bg="black" expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand to="#" className=''>
                        <CustomLink to='/' className="text-decoration-none text-white fw-bolder">Mister-bd-gym</CustomLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between'>

                        <Nav>
                            <CustomLink className="m-2 text-decoration-none" to="/">Home</CustomLink>
                            <CustomLink className="m-2 text-decoration-none" to="about">About</CustomLink>
                        </Nav>
                        <Nav>
                            <CustomLink className="m-2 text-decoration-none" to="/login">Login</CustomLink>
                            <CustomLink className="m-2 text-decoration-none" to="/register">Register</CustomLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;