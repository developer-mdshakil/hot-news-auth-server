import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Aside from '../Pages/Shared/Aside/Aside/Aside';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header/Header';
import Sidebar from '../Pages/Shared/Sidebar/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <Aside></Aside>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;