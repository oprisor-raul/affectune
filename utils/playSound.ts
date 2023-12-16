import { Audio } from "expo-av";

const useSoundPlayer = (soundFile) => {
  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(soundFile);

      sound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.isLoaded && status.didJustFinish) {
          await sound.unloadAsync();
        }
      });

      await sound.playAsync();
    } catch (error) {
      console.warn("Couldn't play sound", error);
    }
  };

  return playSound;
};

export default useSoundPlayer;
