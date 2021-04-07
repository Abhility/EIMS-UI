import React, { useEffect, useState } from 'react';
import { httpCall } from '../helpers/http';
import { getValue } from '../helpers/storage';
import UserContext from '../utils/UserContext';

const withUserContext = (Component) => (props) => {
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    let data = await httpCall(
      `http://localhost:9090/api/v1/users/${getValue('userId')}`,
      'GET',
      null
    );

    if (data) {
      data = {
        ...data,
        createdAt: new Date(data.createdAt).toDateString(),
      };
      setUser(data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Component {...props} />
    </UserContext.Provider>
  );
};

export default withUserContext;
