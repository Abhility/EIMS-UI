import { userLogout } from "../../helpers/auth";
import Dashboard from "./Dashboard";
import Leave from '../user/Leave';
import Finance from '../user/Finance';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from "./Profile";
import CreateLeave from "./CreateLeave";
import CreateFinance from "./CreateFinance";

const UserView = ({ history }) => {
  const logoutUser = () => {
    userLogout();
    history.push('/');
  };

  return (
    <BrowserRouter>
      <Dashboard logoutUser={logoutUser} />
      <Switch>
        <Route path='/user' exact component={Profile} />
        <Route path='/user/leaves/create' component={CreateLeave} />
        <Route path='/user/leaves' component={Leave} />
        <Route path='/user/finances/create' component={CreateFinance} />
        <Route path='/user/finances' component={Finance} /> 
      </Switch>
    </BrowserRouter>
  );
};

export default UserView;
