import React, { useState } from 'react';
import { httpCall } from '../../helpers/http';

function CreateUser({ history }) {
  const [userData, setUserData] = useState({
    photoUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
    role: 'EMPLOYEE',
    name: '',
    title: '',
    email: '',
    phone: '',
    team: '',
    salary: '',
    address: '',
    leaveQuota: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((data) => ({
      ...data,
      [name]: name === 'leaveQuota' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async () => {
    console.log(userData);
    const data = await httpCall(
      'http://localhost:9090/api/v1/users/register',
      'POST',
      userData
    );

    if (data) {
      history.push('/admin');
    }
  };

  return (
    <div className='col l8 m8 offset-l4 offset-m4 page-height right-pane'>
      <div className='col s6 offset-s3'>
        <h4 className='center-align'>Create a new user!</h4>
        <div className='row'>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>person</i>
            <input
              id='name-field'
              type='text'
              name='name'
              value={userData.name}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='name-field'>
              Name
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {userData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>business_center</i>
            <input
              id='title-field'
              type='text'
              name='title'
              value={userData.title}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='title-field'>
              Designation
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {userData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>email</i>
            <input
              id='email-field'
              type='email'
              name='email'
              value={userData.email}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='email-field'>
              Email
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {userData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>phone</i>
            <input
              id='phone-field'
              type='tel'
              name='phone'
              value={userData.phone}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='phone-field'>
              Phone
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {userData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>people</i>
            <input
              id='team-field'
              type='text'
              name='team'
              value={userData.team}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='team-field'>
              Team
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {userData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>attach_money</i>
            <input
              id='salary-field'
              type='text'
              name='salary'
              value={userData.salary}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='salary-field'>
              CTC
            </label>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>location_city</i>
            <input
              id='address-field'
              type='text'
              name='address'
              value={userData.address}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='address-field'>
              Address
            </label>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>battery_charging_full</i>
            <input
              id='leave-field'
              type='number'
              name='leaveQuota'
              value={userData.leaveQuota}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='leave-field'>
              Leave Quota
            </label>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>lock</i>
            <input
              id='password-field'
              type='password'
              name='password'
              value={userData.password}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='password-field'>
              Password
            </label>
          </div>
          <div className='input-field col s6 offset-s3 '>
            <button
              className='btn waves-effect waves-light col s12'
              onClick={handleSubmit}
            >
              Create
            </button>
            <span className='red-text  col-s6 offset-s6'>
              {/* {userData.error.invalidPassword && 'Some error occured!'} */}
            </span>
          </div>
        </div>
      </div>
      <div className='col s1' />
    </div>
  );
}

export default CreateUser;
