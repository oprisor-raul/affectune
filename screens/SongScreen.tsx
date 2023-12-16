import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import defaultStyles from "../styles";
import getEmotionNumber from "../utils/getEmotionNumber";
import { getSongRecommandation } from "../api/api";
import DisclaimerText from "../components/texts/DisclaimerText";
import DefaultText from "../components/texts/DefaultText";
import SongDetails from "../components/song/SongDetails";
import renderStars from "../components/song/rederStars";
import DefaultButton from "../components/DefaultButton";
import SmallText from "../components/texts/SmallText";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import useSoundPlayer from "../utils/playSound";

type SongScreenNavigationProp = StackNavigationProp<RootStackParamList, "Song">;

const SongScreen = ({ route }) => {
  const emotion = route.params?.emotion;
  const [songData, setSongData] = useState(route.params?.response);
  const [songRating, setSongRating] = useState(5);
  const [emotionRating, setEmotionRating] = useState(5);

  const navigation = useNavigation<SongScreenNavigationProp>();

  const sendRequest = async () => {
    try {
      const updatedData = {
        ...songData,
        emotion: getEmotionNumber(emotion),
        fb_song: songRating,
        fb_feel: emotionRating,
      };

      const responseData = await getSongRecommandation(updatedData);
      setSongData(responseData);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const playChangeSongSound = useSoundPlayer(require("../sounds/shuffle.mp3"));

  useEffect(() => {
    if (!songData) {
      sendRequest();
    }
  }, []);

  return (
    <View style={defaultStyles.appContainer}>
      <DefaultText>Song curated for '{emotion}' mood:</DefaultText>
      <SongDetails songData={songData} />
      <View style={styles.ratingContainer}>
        <SmallText>Rate the Song:</SmallText>
        <View style={styles.stars}>
          {renderStars(songRating, setSongRating)}
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <SmallText>Rate Emotion Match:</SmallText>
        <View style={styles.stars}>
          {renderStars(emotionRating, setEmotionRating)}
        </View>
      </View>
      <DefaultButton
        title="Switch it up"
        onPress={() => {
          playChangeSongSound();
          sendRequest();
        }}
        style={defaultStyles.wideButton}
      />
      <DisclaimerText>Did we change your mood?</DisclaimerText>
      <DefaultButton
        title="Take another picture"
        onPress={() => navigation.navigate("Camera")}
        style={defaultStyles.wideButton}
      />
      <DisclaimerText>
        Feedback is crucial for personalizing recommendations.
      </DisclaimerText>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  emotionContainer: {
    marginBottom: 20,
  },
  emotionText: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 16,
  },
  ratingSection: {
    alignItems: "flex-start",
    marginVertical: 15,
  },
  ratingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 30,
  },
  ratingContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default SongScreen;
