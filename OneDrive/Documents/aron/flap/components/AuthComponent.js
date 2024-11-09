// components/AuthComponent.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function AuthComponent() {
    const [isLoginModalVisible, setLoginModalVisible] = useState(false);
    const [isRegisterModalVisible, setRegisterModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Flap and Breathe</Text>
            
            <Pressable
                style={styles.authButton}
                onPress={() => setLoginModalVisible(true)}
            >
                <Text style={styles.authButtonText}>Login</Text>
            </Pressable>
            
            <Pressable
                style={styles.authButton}
                onPress={() => setRegisterModalVisible(true)}
            >
                <Text style={styles.authButtonText}>Sign Up</Text>
            </Pressable>

            {/* Modals */}
            <LoginModal visible={isLoginModalVisible} onClose={() => setLoginModalVisible(false)} />
            <RegisterModal visible={isRegisterModalVisible} onClose={() => setRegisterModalVisible(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    authButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#20d4e8',
        borderRadius: 5,
        marginVertical: 10,
    },
    authButtonText: {
        color: 'white',
        fontSize: 18,
    },
});
