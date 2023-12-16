import config from "../config/config";

export async function sendPhoto(photo) {
  try {
    const formData = new FormData();

    // @ts-ignore
    formData.append("file", {
      uri: photo.uri,
      name: "photo.jpg",
      type: "image/jpeg",
    });

    const response = await fetch(`${config.BACKEND_URL}/analyze_emotion`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = await response.json();

    if (data.error || data.dominant_emotion === "undefined") {
      throw new Error("Emotion detection failed");
    } else {
      return data.dominant_emotion;
    }
  } catch (error) {
    return undefined;
  }
}

export async function getSongRecommandation(data) {
  try {
    const response = await fetch(`${config.BACKEND_URL}/get_rec`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending request:", error);
    throw error;
  }
}
