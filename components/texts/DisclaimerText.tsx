import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import { responsiveFontSize } from "../../utils/responsiveFontSize";
const { width, height } = Dimensions.get("window");

const DisclaimerText = ({ children }) => (
  <Text style={styles.disclaimerText}>{children}</Text>
);

const styles = StyleSheet.create({
  disclaimerText: {
    fontSize: responsiveFontSize(width, height, 1.4),
    color: "gray",
    textAlign: "center",
    marginTop: "2%",
    paddingBottom: "2%",
  },
});

export default DisclaimerText;
