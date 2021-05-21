import { get_request } from './utils/fetch';

export const getParcel = async () => {
  try {
    const req = await get_request('/parcels');
    const response = await req.json();

    if (!req || response.rows === undefined) {
      return { success: false };
    } else {
      return { success: true, userParcel: [...response.rows] };
    }
  } catch (error) {
    console.log(error);
  }
};
