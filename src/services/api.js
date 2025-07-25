// src/services/api.js

const API_URL = import.meta.env.VITE_API_URL;

//  GET request: Fetch all users
export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/api/users`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default API_URL;
