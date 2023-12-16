import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const LoadingOverlay = () => (
    <View style={styles.loadingOverlay}>
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="gray" />
            <Text style={styles.loadingText}>Sending photo...</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    loadingOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100,
    },
    loadingContainer: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#000',
    },
});

export default LoadingOverlay;
