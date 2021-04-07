import React, { useContext } from 'react';
import UserContext from '../../utils/UserContext';
import User from '../User';

function Profile() {
  const user = useContext(UserContext);
  return <User user={user} />;
}

export default Profile;
