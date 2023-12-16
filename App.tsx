import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./screens/IntroScreen";
import CameraScreen from "./screens/CameraScreen";
import SuccessScreen from "./screens/EmotionScreen";
import SongScreen from "./screens/SongScreen";

export type RootStackParamList = {
  Description: undefined;
  Camera: undefined;
  Emotion: { emotion: string };
  Song: { emotion: string; response: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Description" component={IntroScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Emotion" component={SuccessScreen} />
        <Stack.Screen name="Song" component={SongScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
