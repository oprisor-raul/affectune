import React, { useEffect, useState } from "react";
import { View } from "react-native";
import defaultData from "../utils/defaultData";
import getEmotionNumber from "../utils/getEmotionNumber";
import DefaultText from "../components/texts/DefaultText";
import DisclaimerText from "../components/texts/DisclaimerText";
import defaultStyles from "../styles";
import DefaultButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import EmojiiImage from "../components/EmojiImage";
import { getSongRecommandation } from "../api/api";

type SuccessScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Emotion"
>;

const SuccessScreen = ({ route }) => {
  const emotion = route.params?.emotion;

  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataToBeSent = data;
        dataToBeSent.emotion = getEmotionNumber(emotion);
        dataToBeSent.fb_song = -1;
        dataToBeSent.fb_feel = -1;
        const responseData = await getSongRecommandation(data);
        setData(responseData);
      } catch (error) {}
    };

    fetchData();
  }, [emotion]);

  const navigation = useNavigation<SuccessScreenNavigationProp>();

  return (
    <View style={defaultStyles.appContainer}>
      <DefaultText>Emotion Detected:</DefaultText>
      <DefaultText>{emotion}</DefaultText>
      <EmojiiImage emotion={emotion} />
      <View
        style={[defaultStyles.smallVerticalMargin, defaultStyles.fullWidthView]}
      >
        <DefaultButton
          title="Find a song"
          onPress={() =>
            navigation.navigate("Song", { emotion: emotion, response: data })
          }
          style={defaultStyles.wideButton}
        />
        <DisclaimerText>Not what you expected?</DisclaimerText>
        <DefaultButton
          title="Take another picture"
          onPress={() => navigation.navigate("Camera")}
          style={defaultStyles.wideButton}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
