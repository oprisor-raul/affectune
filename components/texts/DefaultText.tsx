import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import { responsiveFontSize } from "../../utils/ui/responsiveFontSize";
const { width, height } = Dimensions.get("window");

const DefaultText = ({ children }) => (
  <Text style={styles.defaultText}>{children}</Text>
);

const styles = StyleSheet.create({
  defaultText: {
    fontSize: responsiveFontSize(width, height, 2.4),
    fontWeight: "bold",
    marginBottom: "2%",
  },
});

export default DefaultText;
