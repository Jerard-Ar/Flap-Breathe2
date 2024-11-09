// components/LoginModal.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation if using the hook

export default function LoginModal({ visible, onClose, navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // This function is called when the "Sign In" button is pressed
    const handleSignIn = () => {
        console.log("Sign in button pressed");

        // This is where the navigation to 'Home' happens
        if (navigation && navigation.getState().routeNames.includes('Home')) {
            navigation.navigate('Home');
            console.log("Navigating to HomeScreen");
            setEmail('');
            setPassword('');
        } else {
            console.log("Home route not found in navigator");
        }
    };

    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Pressable onPress={onClose} style={styles.closeButton}>
                        <Text>X</Text>
                    </Pressable>
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Pressable style={styles.signInButton} onPress={handleSignIn}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </Pressable>
                    <Pressable style={styles.registerButton} onPress={onClose}>
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 5,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
    },
    signInButton: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    registerButton: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
    },
});
