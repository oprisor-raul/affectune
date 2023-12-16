import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CameraControls = ({ onReverseCamera, onTakePicture }) => (
    <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.iconButton}
            onPress={onReverseCamera}>
            <Ionicons name="camera-reverse-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={onTakePicture}>
            <Ionicons name="camera-outline" size={24} color="white" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        paddingBottom: 30,
    },
    iconButton: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
});

export default CameraControls;
