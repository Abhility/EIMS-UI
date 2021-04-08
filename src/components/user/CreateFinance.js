import React, { useContext, useState } from 'react';
import { httpCall } from '../../helpers/http';
import UserContext from '../../utils/UserContext';

function CreateFinance({history}) {
  const user = useContext(UserContext);

  const [financeData, setFinanceData] = useState({
    type: '',
    amount: '',
    comments: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFinanceData((data) => ({
      ...data,
      [name]: name === 'amount' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async () => {
    console.log(financeData);
    const data = await httpCall(
      `http://localhost:9090/api/v1/users/${user._id}/finances`,
      'POST',
      financeData
    );

    if (data) {
        history.push('/user/finances');
    }
  };

  return (
    <div className='col l8 m8 offset-l4 offset-m4 page-height right-pane'>
      <div className='col s6 offset-s3'>
        <h4 className='center-align'>Apply for Loan!</h4>
        <div className='row'>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>account_balance</i>
            <select
              id='type-field'
              type='text'
              name='type'
              value={financeData.type}
              onChange={handleChange}
              ref={(M) => {
                window.M.FormSelect.init(M, {});
              }}
            >
              <option value='Personal Loan'>Personal Loan</option>
              <option value='Home Loan'>Home Loan</option>
              <option value='Vehicle Loan'>Vehicle Loan</option>
              <option value='Advance Salary'>Advance Salary</option>
              <option value='Other'>Other</option>
            </select>
            <label className='form-field' htmlFor='type-field'>
              Type
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {financeData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>attach_money</i>
            <input
              id='amount-field'
              type='number'
              name='amount'
              value={financeData.amount}
              onChange={handleChange}
            />
            <label className='form-field' htmlFor='amount-field'>
              Amount
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {financeData.error && 'Please provide a valid email'} */}
            </span>
          </div>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>sms</i>
            <textarea
              id='comments'
              name='comments'
              className='materialize-textarea'
              value={financeData.comments}
              onChange={handleChange}
            ></textarea>
            <label className='form-field' htmlFor='comments'>
              Comments
            </label>
            <span className='red-text  col-s6 offset-s6'>
              {/* {financeData.error && 'Please provide a valid email'} */}
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
              {/* {financeData.error.invalidPassword && 'Some error occured!'} */}
            </span>
          </div>
        </div>
      </div>
      <div className='col s1' />
    </div>
  );
}

export default CreateFinance;
