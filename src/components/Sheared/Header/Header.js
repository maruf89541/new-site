import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
                <Container>
                    <Navbar.Brand href="#home">Car mecanic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#Services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#Experts">Experts</Nav.Link>




                        {
                            user.email &&
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>}
                        {
                            user.email ?
                                <Nav.Link ><Button onClick={logout} variant="outline-secondary">Logout</Button>{' '}</Nav.Link> :
                                <Nav.Link as={Link} to="/login"><Button variant="outline-secondary">Login</Button>{' '}</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;