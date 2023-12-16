import React from "react";
import { StyleSheet, Text, Dimensions, View, Image } from "react-native";
import { responsiveFontSize } from "../../utils/ui/responsiveFontSize";
import DefaultText from "../texts/DefaultText";
import replaceDateCharacters from "../../utils/replaceDateCharacters";
import DisclaimerText from "../texts/DisclaimerText";

const { width, height } = Dimensions.get("window");

const SongDetails = (songData) => {
  let songDatResult = songData.songData.result;

  if (!songDatResult) {
    return (
      <View>
        <Text>No song data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.songDataContainer}>
      <Image
        source={{ uri: songDatResult.thumbnail[0] }}
        style={styles.thumbnail}
      />
      <View style={styles.songDetails}>
        <DefaultText>{songDatResult.title}</DefaultText>
        <Text style={styles.album}>Views: {songDatResult.views}</Text>
        {songDatResult.date && (
          <Text style={styles.artist}>
            Date: {replaceDateCharacters(songDatResult.date[0])}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  songDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  thumbnail: {
    width: 120,
    height: 120,
    marginRight: 15,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  artist: {
    fontSize: 18,
    color: "gray",
  },
  album: {
    fontSize: 18,
    color: "gray",
  },
});

export default SongDetails;
