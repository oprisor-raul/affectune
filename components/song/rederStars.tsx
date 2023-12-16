import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const renderStars = (currentRating, setRating) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <TouchableOpacity key={i} onPress={() => setRating(i)}>
        <Icon
          name={i <= currentRating ? "star" : "star-o"}
          size={40}
          color={i <= currentRating ? "#FDCC0D" : "grey"}
        />
      </TouchableOpacity>
    );
  }
  return stars;
};

export default renderStars;
