import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexs/AuthProvider/AuthProvider';

const Login = () => {
  const[error, setError] = useState('');
  const location = useLocation();
  const  from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  //get loginUser with useContext 
  const { loginUser } = useContext(AuthContext);
  //create event handler with signIUserHandler here
  const signIUserHandler = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true});
      form.reset();
    }).catch(error => {
      console.error(error);
      setError(error.message);
    })
  }

    return (
        <Form onSubmit={signIUserHandler} className='shadow p-4 rounded'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <p>You have no account?<Link to='/register'>Create New Account</Link></p>
        <Button variant="primary" type="submit">
          Login Now
        </Button>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Login;