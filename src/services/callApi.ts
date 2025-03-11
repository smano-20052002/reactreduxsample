import axios from 'axios';

const API_URL = 'http://localhost:3005';

export const apiCall = async (method:any, endpoint:any, data = null, params = null) => {
  try {
    const response = await axios({
      method,
      url: `${API_URL}${endpoint}`,
      data,
      params,
    });
    console.log("api",response.data);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};