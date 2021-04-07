const isLoggedIn = () => localStorage.getItem('token') !== null;

const isAdmin = () => getValue('userRole') === 'ADMIN';

const setData = (key, value) => localStorage.setItem(key, value);

const logoutUser = (token) => localStorage.clear();

const getValue = (key) => localStorage.getItem(key);

export { isLoggedIn, setData, logoutUser, getValue, isAdmin };
