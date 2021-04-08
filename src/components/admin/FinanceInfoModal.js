import { Link } from 'react-router-dom';
import { httpCall } from '../../helpers/http';

const FinanceInfoModal = ({ data, history }) => {
  const processFinance = async (status) => {
    const financeData = await httpCall(
      `http://localhost:9090/api/v1/finances/${data._id}`,
      'PUT',
      {
        isApproved: status,
      }
    );

    if (financeData) history.push('/admin/finances');
  };

  return (
    <div>
      <i
        data-target={`modal-${data._id}`}
        className='material-icons teal-text waves-effect waves-light modal-trigger'
      >
        remove_red_eye
      </i>
      <div
        id={`modal-${data._id}`}
        className='modal modal-fixed-footer'
        ref={(M) => {
          window.M.Modal.init(M, {});
        }}
      >
        <div className='modal-content centet-align'>
          <span className='modal-title'>Finance Details</span>
          <div className='row'>
            <div className='input-field col s4'>
              <input
                disabled
                id='start-date'
                type='text'
                className='validate'
                defaultValue={data.type}
              />
              <label htmlFor='start-date' className='active'>
                Type
              </label>
            </div>
            <div className='input-field col s4'>
              <input
                disabled
                id='end-date'
                type='text'
                className='validate'
                defaultValue={data.amount}
              />
              <label htmlFor='end-date' className='active'>
                Amount
              </label>
            </div>
            <div className='input-field col s4'>
              <input
                disabled
                id='days'
                type='text'
                className='validate'
                defaultValue={data.createdAt}
              />
              <label htmlFor='days' className='active'>
                Applied On
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea
                id='reason'
                disabled
                className='materialize-textarea'
                defaultValue={data.comments}
              />
              <label htmlFor='reason' className='active'>
                Reason
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <h6 htmlFor='user' className='active'>
                Applied By :{' '}
                <Link to={`/admin/users/${data.user._id}`}>
                  {data.user.name}
                </Link>
              </h6>
            </div>
          </div>
          {data.isApproved ? (
            <label className='chip green accent-4 white-text'>Approved</label>
          ) : data.isApproved == null ? (
            <>
              <button
                className='waves-effect waves-light btn green accent-4 col s3 offset-s2'
                onClick={processFinance.bind(null, true)}
              >
                <i class='material-icons left'>check</i> Approve
              </button>
              <button
                className='waves-effect waves-light btn red accent-4 col s3 offset-s2'
                onClick={processFinance.bind(null, false)}
              >
                <i class='material-icons left'>clear</i> Reject
              </button>
            </>
          ) : (
            <label className='chip red accent-4 white-text'>Rejected</label>
          )}
        </div>
        <div className='modal-footer'>
          <label className='modal-close waves-effect waves-red btn-flat'>
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default FinanceInfoModal;
