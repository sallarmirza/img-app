import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function generateImage(prompt) {
  const formData = new FormData();
  formData.append("prompt", prompt);

  const res = await fetch(`${BASE_URL}/images/generate`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to generate image");

  return await res.json(); // expects { type, imageUrl }
}

export async function getGallery() {
  try {
    const res = await axios.get(`${BASE_URL}/gallery`);
    return res.data;
  } catch (err) {
    console.error("Error in fetching gallery:", err);
    throw err;
  }
}

export async function getProfile(userId) {
  try {
    const res = await axios.get(`${BASE_URL}/users/${userId}`);
    return res.data;
  } catch (err) {
    console.error("Error in getting user profile:", err);
    throw err;
  }
}
