import { userLogout } from '../../helpers/auth';
import Leaves from './Leaves';
import Finances from './Finances';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './Users';
import Dashboard from './Dashboard';
import UserProfile from './UserProfile';

const AdminView = ({ history }) => {
    const logoutUser = () => {
      userLogout();
      history.push('/');
    };
  
    return (
      <BrowserRouter>
        <Dashboard logoutUser={logoutUser} />
        <Switch>
          <Route path='/admin' exact component={Users} />
          <Route path='/admin/leaves' component={Leaves} />
          <Route path='/admin/finances' component={Finances} />
          <Route path='/admin/users/:userId' component={UserProfile} />
        </Switch>
      </BrowserRouter>
    );
};

export default AdminView;
