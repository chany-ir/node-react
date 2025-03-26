import axios from "axios";
import { useApiKey } from './UseContect';
const API_URL = "http://localhost:3050/api/RoadsideFriends/help"; // כתובת ה-API

// פונקציה לקבלת כל הבקשות מהשרת
export  const getRequests = async (filters = {}) => {
  
  try {
    const queryParams = new URLSearchParams(filters).toString(); 
    const response = await axios.get(`${API_URL}?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error("שגיאה בשליפת הבקשות:", error);
    throw error;
  }
};
export const getById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("שגיאה בשליפת הבקשות:", error);
    throw error;
  }
};
// פונקציה להוספת בקשה חדשה
export const createRequest = async (newRequest) => {
  try {
    console.log(newRequest);
    const response = await axios.post(API_URL, newRequest);
    return response.data;
  } catch (error) {
    console.error("שגיאה ביצירת בקשה חדשה:", error);
    throw error;
  }
};

// פונקציה לעדכון בקשה קיימת לפי ID
export const updateRequest = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("שגיאה בעדכון הבקשה:", error);
    throw error;
  }
};

// פונקציה למחיקת בקשה לפי ID
export const deleteRequest = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { message: "הבקשה נמחקה בהצלחה" };
  } catch (error) {
    console.error("שגיאה במחיקת הבקשה:", error);
    throw error;
  }
};

export const codeAddress = async (address) => {
  const apiKey = useApiKey();
  try {
    console.log(address);
    const addressString =  `${address.number} ${address.street}, ${address.city}, ישראל`;
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: addressString,
        key: {apiKey}
      },
    });

    if (response.data.status === 'OK') {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } else {
      console.error('Geocoding error:', response.data.status);
      return null;
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
};
