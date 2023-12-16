import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import LoadingOverlay from "../components/LoadingOverlay";
import CameraControls from "../components/camera/CameraControls";
import PhotoPreview from "../components/camera/PhotoPreview";
import DefaultText from "../components/texts/DefaultText";
import defaultStyles from "../styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { sendPhoto } from "../api";

type CameraScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Camera"
>;

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cameraRef = useRef(null);
  const navigation = useNavigation<CameraScreenNavigationProp>();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      let takenPhoto = await cameraRef.current.takePictureAsync();
      setPhoto({ uri: takenPhoto.uri });
    }
  };

  if (hasPermission === false) {
    return (
      <View style={defaultStyles.appContainer}>
        <DefaultText>No access to camera</DefaultText>
      </View>
    );
  }

  const handleSendPhoto = async () => {
    if (!photo) return;

    setIsLoading(true);

    try {
      const emotion = await sendPhoto(photo);

      if (!emotion) {
        Alert.alert(
          "Emotion Detection Failed",
          "No emotion could be detected in the photo. Please try again."
        );
      } else {
        navigation.navigate("Emotion", { emotion: String(emotion) });
      }
    } catch (error) {
      console.error("Error trying to send file", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.cameraContainer}>
      {isLoading && <LoadingOverlay />}
      {photo ? (
        <PhotoPreview
          photoUri={photo.uri}
          onSend={handleSendPhoto}
          onRetake={() => setPhoto(null)}
        />
      ) : (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <CameraControls
            onReverseCamera={() =>
              setType(
                type === CameraType.front ? CameraType.back : CameraType.front
              )
            }
            onTakePicture={takePicture}
          />
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default CameraScreen;
