import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../../Sidebar/Sidebar/Sidebar';
import { AuthContext } from '../../../../Contexs/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
;


const Header = () => {
    const {user} = useContext(AuthContext);
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Hot News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto menu">
                    <Link to="#news">News HeighLight</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        {user?.displayName}
                    </Nav.Link>
                    <Nav.Link href="#deets">
                        {user?.uid ?
                        <Image roundedCircle src={user.photoURL} style={{height: "40px"}}></Image>
                        :
                        <button className='px-3 py-1 rounded'><FaUserCircle /></button>
                        }
                        </Nav.Link>
                </Nav>
                <div className='d-lg-none'>
                    <Sidebar></Sidebar>
                </div>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};

export default Header;