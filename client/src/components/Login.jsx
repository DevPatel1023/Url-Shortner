import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="login-form p-3 mb-4 " style={{ backgroundColor: '#29354A' , color: '#CCCCCC', width: '640px'  ,borderRadius:'7px'}}>
        <form >
            <h1 className='d-flex justify-content-center mb-4'>Log in</h1>
          {/* <!-- Email input --> */}
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form2Example1" placeholder='Email id'  class="form-control" style={{ height: '40px' }} />
          </div>

          {/* <!-- Password input --> */}
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="form2Example2" placeholder='Password' class="form-control" style={{ height: '40px' }} />
          </div>

          {/* <!-- Submit button --> */}
          <div className='d-flex justify-content-center mb-4'><button type="button" className="btn btn-outline-warning col-lg-3 col-12 ">Log in</button></div>
          <div className="text-center" style={{fontSize: '1.2rem'}}>Username : user and Password : user123</div>
        </form>
      </div>
    </div>
  );
};

export default Login;