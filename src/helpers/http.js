import {getValue} from './storage';

const httpCall = async (url, method, body) => {
  try {
    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getValue('token')}`
      },
      method,
      body: method !== 'GET' ? JSON.stringify(body) : null,
    });
    if(!response.ok)
        throw new Error('Error occured!');
    return await response.json();
  } catch (err) {
    console.log(err);
    window.M.toast({
      html: '<h6>Some error occured. Please try again!</h6>',
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
    if(!response.ok)
        throw new Error('Error occured!');
    return await response.json();
  } catch (err) {
    console.log(err);
    window.M.toast({
      html: '<h6>Some error occured. Please try again!</h6>',
      classes: 'red accent-4 white-text',
      displayLength: 2500,
    });
  }
};

export { loginCall, httpCall };
