import {setData,logoutUser} from './storage';

const userLogin = (token, userId, userRole, userName) => {
    setData('token', token);
    setData('userId', userId);
    setData('userRole', userRole);
    setData('userName', userName);
  };

const userLogout = (token) => {
    logoutUser();
};

export {userLogin,userLogout};

