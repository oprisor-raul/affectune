import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import defaultStyles from "../../styles";
import Logo from "../Logo";
import DefaultButton from "../Button";

const screenWidth = Dimensions.get("window").width;

const PhotoPreview = ({ photoUri, onSend, onRetake }) => (
  <View style={defaultStyles.appContainer}>
    {Dimensions.get("window").height > 769 && <Logo sizeMultiplier={0.35} />}
    <Image source={{ uri: photoUri }} style={styles.image} />
    <DefaultButton
      title="Send Photo"
      onPress={onSend}
      style={defaultStyles.wideButton}
    />
    <DefaultButton
      title="Take Another"
      onPress={onRetake}
      style={defaultStyles.wideButton}
    />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: screenWidth > 380 ? "90%" : "85%",
    height: screenWidth > 380 ? 400 : 300,
    marginBottom: screenWidth > 480 ? 20 : 10,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default PhotoPreview;
