import '../../index.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../utils/UserContext';

const Dashboard = (props) => {
  const user = useContext(UserContext);

  return (
    <div className='col l4 m4 teal white-text page-height z-depth-3 left-pane'>
      <div className='nav-wrapper teal center-align'>
        <img
          src='https://www.eimsousse.com/uploads/1/2/4/6/12464130/logo-eims_1_orig.png'
          width='100px'
          height='100px'
          className='brand-logo'
          alt='logo'
        />
      </div>
      <div className='container center-align'>
        <img
          className='avatar'
          src={user.photoUrl}
          alt='avatar'
        />
        <h4>{user.name}</h4>
        <h6 className='black-text'>{user.title}</h6>
      </div>
      <div className='navigation'>
        <ul className='collection'>
          <li className='collection-item teal'>
            {' '}
            <Link to='/admin'>Users</Link>
          </li>
          <li className='collection-item teal'>
            <Link to='/admin/leaves'>Leaves</Link>
          </li>
          <li className='collection-item teal'>
            <Link to='/admin/finances'>Finances</Link>
          </li>
        </ul>
        <button
          className='waves-effect waves-teal white-text btn-flat col s4 offset-s4'
          onClick={props.logoutUser}
        >
          <i className='material-icons left'>power_settings_new</i>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
