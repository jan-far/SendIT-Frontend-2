const GetHostUrl = () => {
  return window.location.host.indexOf('127.0.0.1') === 0 || window.location.host.indexOf('localhost') === 0
    ? 'http://127.0.0.1:3001/api/v1'
    : 'https://sendit-postgres.herokuapp.com/api/v1';
};

const url = GetHostUrl();

export const post_request = async (details, route) => {
  try {
    const requestData = await fetch(`${url}${route}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(details),
    });
    return requestData;
  } catch (error) {
    console.log(error);
  }
};

export const get_request = async (route, admin) => {
  const { token } = admin ? JSON.parse(localStorage.getItem('admin_data')): JSON.parse(localStorage.getItem('user_data'));
  
  try {
    const requestData = await fetch(`${url}${route}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      },
      method: 'GET',
    });
    return requestData;
  } catch (error) {
    console.log(error);
  }
};

export const user_post = async (details, route) => {
  const { token } = JSON.parse(localStorage.getItem('user_data'));

  try {
    const requestData = await fetch(`${url}${route}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      },
      method: 'POST',
      body: JSON.stringify(details),
    });
    return requestData;
  } catch (error) {
    console.log(error);
  }
};

export const delete_parcel = async (route) => {
  const { token } = JSON.parse(localStorage.getItem('user_data'));

  try {
    const requestData = await fetch(`${url}${route}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      },
      method: 'DELETE',
    });
    return requestData;
  } catch (error) {
    console.log(error);
  }
};

export const update_parcel = async (details, route) => {
  const { token } = JSON.parse(localStorage.getItem('user_data'));

  try {
    const requestData = await fetch(`${url}${route}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`,
      },
      method: 'PUT',
      body: JSON.stringify(details),
    });
    return requestData;
  } catch (error) {
    console.log(error);
  }
};
