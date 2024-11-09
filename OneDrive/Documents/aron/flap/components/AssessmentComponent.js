// components/AssessmentComponent.js
import React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

export default function AssessmentComponent({ onClose }) {
    return (
        <View style={styles.container}>
            {/* Close Button */}
            <Pressable style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>X</Text>
            </Pressable>

            {/* Title */}
            <Text style={styles.title}>Assessment</Text>

            {/* Image */}
            <Image
                source={require('@/assets/images/assessment.jpg')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: "150%",
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        position: 'relative', // For positioning the close button
        marginBottom: 10,
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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: '90%',
        borderRadius: 10,
    },
});
