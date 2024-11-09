// components/ProfileComponent.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function ProfileComponent({ onClose }) {
    const userInfo = {
        name: "Aron Lungsod",
        email: "qjaalungsod@tip.edu.ph",
        age: 22,
        bio: "Breathing exercises enthusiast.",
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileBox}>
                <Text style={styles.title}>User Profile</Text>
                <Text style={styles.infoLabel}>Name:</Text>
                <Text style={styles.infoText}>{userInfo.name}</Text>
                <Text style={styles.infoLabel}>Email:</Text>
                <Text style={styles.infoText}>{userInfo.email}</Text>
                <Text style={styles.infoLabel}>Age:</Text>
                <Text style={styles.infoText}>{userInfo.age}</Text>
                <Text style={styles.infoLabel}>Bio:</Text>
                <Text style={styles.infoText}>{userInfo.bio}</Text>
                <Pressable style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeButtonText}>Back</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Centers the profileBox vertically within the container
        alignItems: 'center',      // Centers the profileBox horizontally within the container
    },
    profileBox: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'left',
    },
    infoText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'left',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
