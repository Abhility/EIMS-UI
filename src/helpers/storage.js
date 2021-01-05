const isLoggedIn = () => localStorage.getItem('token') !== null;

const setData = (key,value) => localStorage.setItem(key, value);

const logoutUser = (token) => localStorage.removeItem('token');

const getValue = (key) => localStorage.getItem(key);

export { isLoggedIn, setData, logoutUser, getValue };
