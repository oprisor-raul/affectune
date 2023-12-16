export default function getEmotionNumber(emotion) {
  const faceEmotions = {
    angry: 0,
    fear: 1,
    happy: 2,
    sad: 3,
    surprise: 4,
    neutral: 6,
    disgust: 7,
  };

  return faceEmotions[emotion] !== undefined ? faceEmotions[emotion] : 2;
}
