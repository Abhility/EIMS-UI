import React from 'react';
import UserView from './components/user/UserView';
import AdminView from './components/admin/AdminView';
import Login from './components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import withUserContext from './components/withUserContext';

function App() {
  return (
    <div className='row'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <ProtectedRoute
            path='/admin'
            adminOnly={true}
            component={withUserContext(AdminView)}
          />
          <ProtectedRoute 
            path='/user' 
            adminOnly={false} 
            component={withUserContext(UserView)} 
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
