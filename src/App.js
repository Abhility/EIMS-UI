import React, { useEffect, useState } from 'react';
import Dashboard from './components/user/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Leave from './components/user/Leave';
import Finance from './components/user/Finance';
import Profile from './components/user/Profile';
import Login from './components/Login';
import { isLoggedIn, setData, logoutUser, getValue } from './helpers/storage';
import UserContext from './utils/UserContext';
import { httpCall } from './helpers/http';

function App() {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState({ isLoggedIn: isLoggedIn() });

  const userLogin = (token, id) => {
    setData('token', token);
    setData('id', id);
    setAuth((auth) => {
      return {
        ...auth,
        isLoggedIn: true,
      };
    });
  };

  const userLogout = (token) => {
    logoutUser();
    setAuth((auth) => {
      return {
        ...auth,
        isLoggedIn: false,
      };
    });
  };

  const getUserData = async () => {
    const user = await httpCall(
      `http://localhost:9090/api/v1/users/${getValue('id')}`,
      'GET'
    );
    if (user) {
      console.log(user);
      setUser(user);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className='row'>
      <BrowserRouter>
        {auth.isLoggedIn ? (
          user.role === 'ADMIN' ? (
            <>
              <UserContext.Provider value={user}>
                <Dashboard logoutUser={userLogout} />
                <Switch>
                  <Route path='/' exact component={Profile} />
                  <Route path='/leaves' component={Leave} />
                  <Route path='/finances' component={Finance} />
                </Switch>
              </UserContext.Provider>
            </>
          ) : (
            <h1>User is not ADMIN</h1>
          )
        ) : (
          <Login loginUser={userLogin} logoutUser={userLogout} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
