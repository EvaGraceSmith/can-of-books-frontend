import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (

            <Navbar bg="light" variant="light">
                <Container>
                    <img
                        src={require('../img/pngaaa.com-1220636.png')}
                        width='50'
                        height='50'
                        className="d-inline-block align-top"
                        alt="Books logo"
                    />
                    <Navbar.Brand href='/'>My Favorite Books</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/books'>Library</Nav.Link>
                        <Nav.Link href='/about'>About Us</Nav.Link>
                    </Nav>

                </Container>
            </Navbar >
        );
    }
}

export default Header;
