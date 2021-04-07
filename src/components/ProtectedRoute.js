import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn , isAdmin} from '../helpers/storage';
import UnAuthorized from './UnAuthorized';

const ProtectedRoute = ({adminOnly, ...props }) => {
  if (isLoggedIn()) {
      console.log(adminOnly)
      if(adminOnly){
         return isAdmin() ? <Route {...props}/> : <UnAuthorized/>;
      }else{
         return <Route {...props}/>
      }
  }else{
    return <Redirect to="/"/>
  }
};

export default ProtectedRoute;
