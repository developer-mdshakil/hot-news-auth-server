import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaPlus, FaUserCircle} from "react-icons/fa";import Sidebar from '../../Sidebar/Sidebar/Sidebar';
;


const Header = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className="h3" href="/">Hot News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#news">News</Nav.Link>
                    <Nav.Link href="#pricing">News HeighLight</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Help</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                    <Button className='h3' variant="danger"><FaPlus /> Advertise</Button>
                    </Nav.Link>
                    <Nav.Link href="#deets"><button type='file' className='px-3 py-1 rounded'><FaUserCircle /></button></Nav.Link>
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