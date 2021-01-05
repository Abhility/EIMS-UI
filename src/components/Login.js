import { useState } from 'react';
import { loginCall } from '../helpers/http';

const Login = ({ loginUser }) => {
  const [data, setData] = useState({ email: '', password: '', error: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === 'email' && !regex.test(value)) {
      setData((data) => {
        return { ...data, [name]: value, error: true };
      });
    } else {
      setData((data) => {
        return { ...data, [name]: value, error: false };
      });
    }
    console.log(data);
  };

  const handleSubmit = async (event) => {
    const { email, password, error } = data;
    if (!error) {
      let response = await loginCall(
        'http://localhost:9090/api/v1/auth/login',
        { email, password }
      );
      if(response.token)
       loginUser(response.token, response.userId);
    }
  };

  return (
    <div className='valign-wrapper'>
      <div className='col s6 teal login-left-block valign-wrapper'>
        <div className='col s2' />
        <img
          src='https://www.eimsousse.com/uploads/1/2/4/6/12464130/logo-eims_1_orig.png'
          className='brand-logo center-align col s8'
          alt='logo'
        />
        <div className='col s2' />
      </div>
      <div className='col s4 offset-s1'>
        <div className='row'>
          <h3 className='teal-text'>Welcome to EIMS</h3>
          <h6>Please login to continue</h6>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>email</i>
            <input
              id='email-field'
              type='email'
              name='email'
              value={data.email}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='email-field'>
              Email
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {data.error && 'Please provide a valid email'}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>lock</i>
            <input
              id='password-field'
              type='password'
              name='password'
              value={data.password}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='password-field'>
              Password
            </label>
          </div>
          <div className='input-field col s12'>
            <button
              className='btn waves-effect waves-light'
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className='col s1' />
    </div>
  );
};

export default Login;
