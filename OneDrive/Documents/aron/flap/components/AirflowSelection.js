// components/AirflowSelection.js
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function AirflowSelection({ onClose }) {
    return (
        <View style={styles.container}>
            {/* Close Button */}
            <Pressable style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>X</Text>
            </Pressable>

            <Text style={styles.title}>Select your prescribed airflow rate:</Text>
            
            <View style={styles.buttonGroup}>
                <Pressable style={styles.optionButton}>
                    <Text style={styles.optionText}>600 mL/s</Text>
                </Pressable>
                <Pressable style={styles.optionButton}>
                    <Text style={styles.optionText}>900 mL/s</Text>
                </Pressable>
                <Pressable style={styles.optionButton}>
                    <Text style={styles.optionText}>1200 mL/s</Text>
                </Pressable>
            </View>

            <Pressable style={styles.playButton}>
                <Text style={styles.playButtonText}>Play</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        position: 'relative', // Allow positioning of close button
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#ccc',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        color: 'black',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonGroup: {
        width: '100%',
        alignItems: 'center',
    },
    optionButton: {
        width: '90%',
        paddingVertical: 12,
        backgroundColor: '#A281E5',
        borderRadius: 25,
        marginBottom: 15,
        alignItems: 'center',
    },
    optionText: {
        color: 'white',
        fontSize: 16,
    },
    playButton: {
        width: '90%',
        paddingVertical: 12,
        backgroundColor: '#007AFF',
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 15,
    },
    playButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
