import LeaveInfoModal from './LeaveInfoModal';
import { useState, useEffect } from 'react';
import { httpCall } from '../../helpers/http';

const Leaves = ({history}) => {
  const [leaves, setLeaves] = useState([]);

  const fetchLeaves = async () => {
    let data = await httpCall(
      `http://localhost:9090/api/v1/leaves`,
      'GET',
      null
    );
    if (data) {
      data = data
        .filter((item) => item.user.role !== 'ADMIN')
        .map((item) => {
          return {
            ...item,
            startDate: new Date(item.startDate).toDateString(),
            endDate: new Date(item.endDate).toDateString(),
            createdAt: new Date(item.createdAt).toDateString(),
          };
        });
      setLeaves(data);
    }
  };
  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div className='col l8 m8 offset-l4 offset-m4 page-height right-pane'>
      <h4 className='center-align'>Leaves</h4>
      <table className='striped centered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {leaves &&
            leaves.map((leave) => (
              <tr key={leave._id}>
                <td>{leave.user.name}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>
                  {leave.isApproved ? (
                    <label className='chip green accent-4 white-text'>
                      Approved
                    </label>
                  ) : leave.isApproved == null ? (
                    <label className='chip black-text'>Pending</label>
                  ) : (
                    <label className='chip red accent-4 white-text'>
                      Rejected
                    </label>
                  )}
                </td>
                <td>
                  <LeaveInfoModal key={leave._id} data={leave}history={history} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Leaves;
