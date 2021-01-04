import React from 'react';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Leave from './components/Leave';
import Finance from './components/Finance';
import Profile from './components/Profile';

function App() {
  return (
    <div className="row">
    <BrowserRouter>
    <Dashboard/>
    <Switch>
     <Route path="/" exact component={Profile} /> 
     <Route path="/leaves" component={Leave} />
     <Route path="/finances" component={Finance} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
