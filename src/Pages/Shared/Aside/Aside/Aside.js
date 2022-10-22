import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCurosel from '../../Brand/BrandCurosel';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../../Contexs/AuthProvider/AuthProvider';

const Aside = () => {
    const { googleLogin ,githubLogin} = useContext(AuthContext);

    // provider here google provider 
    const googleProvider = new GoogleAuthProvider();

     const googleSignIn = () => {
        googleLogin(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
        }).catch( error => console.error(error))
     }
     
     //github providre here
     const githubProdiver = new GithubAuthProvider();

     //declare event handler with github signIN
     const githubSignIn = () => {
        githubLogin(githubProdiver)
        .then( result => {
            const user = result.user;
            console.lg(user);
        }).catch(error => console.error(error))
     }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={googleSignIn} className='mb-2 px-5' variant="outline-primary"><FaGoogle /> Login via Googel</Button>
                <Button onClick={githubSignIn} className='mb-4 px-5' variant="outline-dark"><FaGithub /> Login via Github</Button>
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
            <div>
                <BrandCurosel></BrandCurosel>
            </div>
        </div>
    );
};  

export default Aside;