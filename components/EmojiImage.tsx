import React from "react";
import { Image, StyleSheet } from "react-native";
import getImageForEmotion from "../utils/getImageForEmotion";

interface EmojiiImageProps {
  emotion: string;
}

const EmojiiImage: React.FC<EmojiiImageProps> = ({ emotion }) => {
  return <Image source={getImageForEmotion(emotion)} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default EmojiiImage;
