import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginInputChanges = (event) => {
    const { name, value } = event.target;
    if (name === 'userName') {
      setUserName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmitLoginForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { userName, password });
      if (response.status === 200 ) {
        console.log('Login successful'); 
        navigate('/'); // Redirect to /shortner
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="login-form p-3 mb-4" style={{ backgroundColor: '#29354A', color: '#CCCCCC', width: '640px', borderRadius: '7px' }}>
        <form onSubmit={onSubmitLoginForm}>
          <h1 className='d-flex justify-content-center mb-4'>Log in</h1>
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              name="userName" 
              value={userName}
              onChange={handleLoginInputChanges}
              placeholder='Username or Email-id'
              className="form-control"
              style={{ height: '40px' }}
            />
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              name="password" 
              value={password}
              onChange={handleLoginInputChanges}
              placeholder='Password'
              className="form-control"
              style={{ height: '40px' }}
            />
          </div>
          <div className='d-flex justify-content-center mb-4'>
            <button type="submit" className="btn btn-outline-warning col-lg-3 col-12">Log in</button>
          </div>
          <div className="text-center" style={{ fontSize: '1.2rem' }}>Username: user and Password: user123</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
