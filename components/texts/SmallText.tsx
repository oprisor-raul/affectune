import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import { responsiveFontSize } from "../../utils/responsiveFontSize";
const { width, height } = Dimensions.get("window");

const SmallText = ({ children }) => (
  <Text style={styles.smallText}>{children}</Text>
);

const styles = StyleSheet.create({
  smallText: {
    fontSize: responsiveFontSize(width, height, 1.6),
    textAlign: "center",
    marginBottom: "3%",
  },
});

export default SmallText;
