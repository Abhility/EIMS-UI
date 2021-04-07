import { useState } from 'react';
import { loginCall } from '../helpers/http';
import {userLogin} from '../helpers/auth';

const Login = ({history}) => {
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
  };

  const handleSubmit = async (event) => {
    const { email, password, error } = data;
    if (!error) {
      try {
        let response = await loginCall(
          'http://localhost:9090/api/v1/auth/login',
          { email, password }
        );
        let { token, userId, role, name } = response;
        userLogin(token, userId, role, name);
        if (role === 'ADMIN') history.push('/admin');
        else history.push('/user');
      } catch (err) {
        setData((data) => {
          return { ...data, error: { invalidPassword: true } };
        });
      }
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
              className='btn waves-effect waves-light col s12'
              onClick={handleSubmit}
            >
              Login
            </button>
            <span className='red-text  col-s6 offset-s6'>
              {data.error.invalidPassword && 'Some error occured!'}
            </span>
          </div>
        </div>
      </div>
      <div className='col s1' />
    </div>
  );
};

export default Login;
