import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function generateImage(prompt) {
  try {
    const response = await axios.post(`${BASE_URL}/images/generate`, {
      prompt, // sending prompt in request body
    });
    console.log("Prompt sent:", prompt);
    return response.data; // return generated image data
  } catch (err) {
    console.error("Error in generating image:", err);
    throw err;
  }
}

export async function getGallery() {
  try {
    const response = await axios.get(`${BASE_URL}/gallery`);
    return response.data; // return gallery list
  } catch (error) {
    console.error("Error in fetching gallery:", error);
    throw error;
  }
}

export async function getProfile(userId) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data; // return user profile
  } catch (error) {
    console.error("Error in getting user profile:", error);
    throw error;
  }
}
