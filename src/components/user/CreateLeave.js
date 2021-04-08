import React, { useContext, useState } from 'react';
import { httpCall } from '../../helpers/http';
import UserContext from '../../utils/UserContext';

function CreateLeave({ history }) {
  const user = useContext(UserContext);

  const [leaveData, setLeaveData] = useState({
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setLeaveData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(leaveData);
    const data = await httpCall(
      `http://localhost:9090/api/v1/users/${user._id}/leaves`,
      'POST',
      leaveData
    );

    if (data) {
      history.push('/user/leaves');
    }
  };

  return (
    <div className='col l8 m8 offset-l4 offset-m4 page-height right-pane'>
      <div className='col s6 offset-s3'>
        <h4 className='center-align'>Apply for Leave!</h4>
        <div className='row'>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>date_range</i>
            <input
              id='start-date-field'
              type='date'
              name='startDate'
              value={leaveData.startDate}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='start-date-field'>
              Start Date
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {leaveData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>date_range</i>
            <input
              id='end-date-field'
              type='date'
              name='endDate'
              value={leaveData.endDate}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='end-date-field'>
              End Date
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {leaveData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>sms</i>
            <textarea
              id='reason'
              name='reason'
              className='materialize-textarea'
              value={leaveData.reason}
              onChange={handleChange}
            ></textarea>
            <label className='form-field' htmlFor='reason'>
              Reason
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {leaveData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s6 offset-s3 '>
            <button
              className='btn waves-effect waves-light col s12'
              onClick={handleSubmit}
            >
              Create
            </button>
            <span className='red-text  col-s6 offset-s6'>
              {/* {leaveData.error.invalidPassword && 'Some error occured!'} */}
            </span>
          </div>
        </div>
      </div>
      <div className='col s1' />
    </div>
  );
}

export default CreateLeave;
