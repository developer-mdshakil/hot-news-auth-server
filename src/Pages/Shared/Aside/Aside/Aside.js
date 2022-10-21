import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const Aside = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2 px-5' variant="outline-primary"><FaGoogle /> Login via Googel</Button>
                <Button className='mb-4 px-5' variant="outline-dark"><FaGithub /> Login via Github</Button>
            </ButtonGroup>
            <div className=''>
                <h5>Find Us on</h5>
                <ListGroup>
                <ListGroup.Item className='border-0 shadow-lg mb-2 h5'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='border-0 shadow-lg mb-2 h5'><FaYoutube /> You Tube</ListGroup.Item>
                <ListGroup.Item className='border-0 shadow-lg mb-2 h5'><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item className='border-0 shadow-lg mb-2 h5'><FaWhatsapp /> What's Up</ListGroup.Item>
                <ListGroup.Item className='border-0 shadow-lg mb-2 h5'><FaDiscord /> Discord</ListGroup.Item>
                <ListGroup.Item className='border-0 shadow-lg mb-2 h5'> Privacy & Policy</ListGroup.Item>
                <ListGroup.Item className='border-0 shadow-lg mb-2 h5'>Terms & Condition</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};  

export default Aside;