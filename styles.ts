import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
    backgroundColor: "#fff",
  },
  smallVerticalMargin: {
    marginTop: "3%",
    marginBottom: "3%",
  },
  wideButton: {
    width: screenWidth > 380 ? "60%" : "50%",
    alignSelf: "center",
  },
  fullWidthView: {
    width: "100%",
  },
});

export default styles;
