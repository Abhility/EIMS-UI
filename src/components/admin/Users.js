import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { httpCall } from '../../helpers/http';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    let data = await httpCall(
      `http://localhost:9090/api/v1/users`,
      'GET',
      null
    );
    if (data) {
      data = data
        .filter((item) => item.role !== 'ADMIN')
        .map((item) => {
          return {
            ...item,
            createdAt: new Date(item.createdAt).toDateString(),
          };
        });
      setUsers(data);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='col l8 m8 offset-l4 offset-m4 page-height right-pane'>
      <h4 className='center-align'>Users</h4>
      <table className='striped centered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.title}</td>
                <td>
                  <Link to={`/admin/users/${user._id}`}>
                    <i className='material-icons teal-text waves-effect waves-light'>
                      remove_red_eye
                    </i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
