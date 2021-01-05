import {getValue} from './storage';

const httpCall = async (url, method, body) => {
  try {
    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getValue('token')}`
      },
      method,
      body: method === 'POST' ? JSON.stringify(body) : null,
    });
    if(!response.ok)
         throw Error('some error');
    return await response.json();
  } catch (err) {
    console.log(err);
    window.M.toast({
      html: '<h6>Network error! Please check your internet connection</h6>',
      classes: 'red accent-4 white-text',
      displayLength: 2500,
    });
  }
};

const loginCall = async (url, body) => {
  try {
    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
    window.M.toast({
      html: '<h6>Network error! Please check your internet connection</h6>',
      classes: 'red accent-4 white-text',
      displayLength: 2500,
    });
  }
};

export { loginCall, httpCall };
