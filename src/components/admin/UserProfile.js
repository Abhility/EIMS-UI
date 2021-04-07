import React, { useEffect, useState } from 'react';
import { httpCall } from '../../helpers/http';
import User from '../User';

function UserProfile({ match }) {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    let data = await httpCall(
      `http://localhost:9090/api/v1/users/${match.params.userId}`,
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

  return <User user={user} />;
}

export default UserProfile;
