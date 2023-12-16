const getImageForEmotion = (emotion) => {
  const images = {
    angry: require("../assets/emoji/angry.png"),
    disgust: require("../assets/emoji/disgust.png"),
    fear: require("../assets/emoji/fear.png"),
    happy: require("../assets/emoji/happy.png"),
    sad: require("../assets/emoji/sad.png"),
    surprise: require("../assets/emoji/surprise.png"),
    neutral: require("../assets/emoji/neutral.png"),
  };

  return images[emotion] || require("../assets/logo.png");
};

export default getImageForEmotion;
