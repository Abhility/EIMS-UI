import { useState, useEffect } from 'react';
import { httpCall } from '../../helpers/http';
import FinanceInfoModal from './FinanceInfoModal';

const Finance = () => {
  const [finances, setFinances] = useState([]);

  const fetchfinances = async () => {
    let data = await httpCall(
      'http://localhost:9090/api/v1/finances',
      'GET',
      null
    );
    console.log(data);
    if (data) {
      data = data.map((item) => {
        return {
          ...item,
          createdAt: new Date(item.createdAt).toDateString(),
        };
      });
      setFinances(data);
    }
  };
  useEffect(() => {
    fetchfinances();
  }, []);

  return (
    <div className='col l8 m8 offset-l4 offset-m4 page-height right-pane'>
      <h4 className='center-align'>Finances</h4>
      <table className='striped centered'>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {finances &&
            finances.map((finance) => (
              <tr key={finance._id}>
                <td>{finance.type}</td>
                <td>{finance.amount}</td>
                <td>
                  {finance.isApproved ? (
                    <label className='chip green accent-4 white-text'>
                      Approved
                    </label>
                  ) : finance.isApproved == null ? (
                    <label className='chip black-text'>Pending</label>
                  ) : (
                    <label className='chip red accent-4 white-text'>
                      Rejected
                    </label>
                  )}
                </td>
                <td>
                  <FinanceInfoModal key={finance._id} data={finance} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Finance;