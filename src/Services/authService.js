import { get_request, post_request } from './utils/fetch';

export const verifyUser = async () => {
  const userData = JSON.parse(localStorage.getItem('user_data'));

  if (!userData) {
    return { success: false };
  }

  try {
    const req = await get_request('/user/authenticate');
    const res = await req.json();

    if (req.status === 200) {
      return { success: true, user: { ...res.Profile } };
    }
    return { success: false, message: res.message };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const verifyAdmin = async () => {
  const adminData = JSON.parse(localStorage.getItem('admin_data'));

  if (!adminData) {
    return { success: false };
  }

  try {
    const req = await get_request('/admin/authenticate', 'admin');
    const res = await req.json();

    if (req.status === 200) {
      return { success: true, admin: { ...res.Profile } };
    }
    return { success: false, message: res.message };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export const getUser = async () => {
  try {
    const req = await get_request('/user');
    const res = await req.json();

    if (req.status === 200) {
      if (res.Profile.role === 1) {
        return { success: true, user: { ...res.Profile } };
      } else {
        return { success: false };
      }
    } else {
      return { success: false, message: res.message };
    }
  } catch (error) {
    return { success: false };
  }
};

export const getAllByAdmin = async (route) => {
  try {
    const req = await get_request(route, 'admin');
    const response = await req.json();

    if (!req || response.rows === undefined) {
      return { success: false, message: response.message };
    } else if (response.rows === [] || response.rowCount === 0) {
      return { success: false, message: response.message };
    } else {
      return { success: true, data: [...response.rows] };
    }
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (data, route) => {
  try {
    const req = await post_request(data, route);
    const res = await req.json();

    if (res === undefined || req.status === 400) {
      return { success: false, message: res.message };
    }else if (res.Profile.role === 2) {
      return { success: false, message: "Admin Credentials provided! If admin, login through the admin portal!" };
    } else {
      return { success: true, user: { ...res.Profile }, message: res.message };
    }
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const postAdmin = async(data, route) => {
  try {
    const req = await post_request(data, route);
    const res = await req.json();

    if (res === undefined || req.status === 400) {
      return { success: false, message: res.message };
    }else if (res.Profile.role === 1) {
      return { success: false, message: "Admin Credentials required. If not admin, login from SignIn page!" };
    } else {
      return { success: true, admin: { ...res.Profile }, message: res.message };
    }
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}