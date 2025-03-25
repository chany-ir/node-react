import axios from "axios";

const API_URL = "http://localhost:3050/api/RoadsideFriends/volunteer"; // כתובת ה-API

// פונקציה לקבלת כל הבקשות מהשרת
export const getvolunteer = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("שגיאה בשליפת הבקשות:", error);
    throw error;
  }
};
export const getById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    // const response = await axios.get(`${API_URL}/${id}`);
    console.log("i in the app",response);
    return response.data;
  } catch (error) {
    console.error("שגיאה בשליפת הבקשות:", error);
    throw error;
  }
};
// פונקציה להוספת בקשה חדשה
export const createvolunteer = async (newRequest) => {
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
export const updatevolunteer = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("שגיאה בעדכון הבקשה:", error);
    throw error;
  }
};

// פונקציה למחיקת בקשה לפי ID
export const deletevolunteer = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { message: "הבקשה נמחקה בהצלחה" };
  } catch (error) {
    console.error("שגיאה במחיקת הבקשה:", error);
    throw error;
  }
};