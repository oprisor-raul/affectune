import React from "react";
import { View } from "react-native";
import Logo from "../components/Logo";
import DisclaimerText from "../components/texts/DisclaimerText";
import SmallText from "../components/texts/SmallText";
import DefaultText from "../components/texts/DefaultText";
import DefaultButton from "../components/Button";
import defaultStyles from "../styles";
import { StatusBar } from "expo-status-bar";

interface IntroScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
  return (
    <View style={defaultStyles.appContainer}>
      <DefaultText>Welcome to Affectune</DefaultText>
      <Logo />
      <SmallText>Step 1: Take a selfie</SmallText>
      <SmallText>Step 2: Get a song recommendation</SmallText>
      <SmallText>Step 3: Enjoy music</SmallText>
      <View style={defaultStyles.smallVerticalMargin}>
        <DefaultButton
          title="Go to Camera"
          onPress={() => navigation.navigate("Camera")}
        />
      </View>
      <DisclaimerText>
        Made with ❤️ by Joița Răzvan, Moldovan Andrei, Oprișor Raul-Alexandru,
        Trif Alin
      </DisclaimerText>
      <DisclaimerText>Special Thanks to Gălițianu Andrei</DisclaimerText>
      <StatusBar style="auto" />
    </View>
  );
};

export default IntroScreen;
