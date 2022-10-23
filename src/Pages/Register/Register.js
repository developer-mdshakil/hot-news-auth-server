import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexs/AuthProvider/AuthProvider';

const Register = () => {
  const { createUser, profileUpdate, verifyEmail } = useContext(AuthContext);

  //show error message here
  const [error, setError] = useState('');
  const [accepted ,setAccepted] = useState(false);

  //create a event handler with 'RgisterHandler' with from onSubmit here
  const RegisterHandler = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password)
    createUser(email, password)
    .then( result => {
      const user = result.user;
      console.log(user);
      emailVerifyHandler();
      form.reset();
      upDataProfileHandler(name, photoURL)
    }).catch(error => {
      console.error(error);
      setError(error.message);
    })
  }

  //emailVerify here
  const emailVerifyHandler = () =>{
    verifyEmail()
    .then( ()=> {
      alert('please verify your email')
    }).catch( error => {
      console.error(error)
    })
  }

  //updataprofileHandler here
  const upDataProfileHandler = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    profileUpdate(profile)
    .then( () => {

    }).catch(error => {
      console.error(error)
    })

  }

  //checked handler here
  const checkedHandler = event => {
    setAccepted(event.target.checked);
  }

    return (
        <Form onSubmit={RegisterHandler} className='shadow p-4 rounded'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter name" />
        </Form.Group>  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Choose photo</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" />
        </Form.Group>  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={checkedHandler} type="checkbox" label={<>Accept<Link to='/terms'>Term and Conditions</Link></>} />
      </Form.Group>
        <p>Already have an account?Please<Link to='/login'>login</Link></p>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register Now
        </Button>
        <Form.Text className="text-danger">
           {error}
          </Form.Text>
      </Form>
    );
};

export default Register;