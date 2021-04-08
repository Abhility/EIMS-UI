import { Link } from 'react-router-dom';
import { httpCall } from '../../helpers/http';

const LeaveInfoModal = ({ data, history }) => {
  const processLeave = async (status) => {
    const leavesData = await httpCall(
      `http://localhost:9090/api/v1/leaves/${data._id}`,
      'PUT',
      {
        isApproved: status,
      }
    );

    if (leavesData) history.push('/admin/leaves');
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
          <span className='modal-title'>Leave Details</span>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                disabled
                id='start-date'
                type='text'
                className='validate'
                defaultValue={data.startDate}
              />
              <label htmlFor='start-date' className='active'>
                Start date
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                disabled
                id='end-date'
                type='text'
                className='validate'
                defaultValue={data.endDate}
              />
              <label htmlFor='end-date' className='active'>
                End date
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                disabled
                id='days'
                type='text'
                className='validate'
                defaultValue={data.days}
              />
              <label htmlFor='days' className='active'>
                Days
              </label>
            </div>
            <div className='input-field col s3'>
              <textarea
                id='createdAt'
                disabled
                className='materialize-textarea'
                defaultValue={data.createdAt}
              />
              <label htmlFor='createdAt' className='active'>
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
                defaultValue={data.reason}
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
                onClick={processLeave.bind(null, true)}
              >
                <i class='material-icons left'>check</i> Approve
              </button>
              <button
                className='waves-effect waves-light btn red accent-4 col s3 offset-s2'
                onClick={processLeave.bind(null, false)}
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

export default LeaveInfoModal;
