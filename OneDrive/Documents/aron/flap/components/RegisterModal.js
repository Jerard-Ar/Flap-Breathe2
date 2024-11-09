// components/RegisterModal.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function RegisterModal({ visible, onClose }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Clear the input fields after pressing the Sign up button
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Pressable onPress={onClose} style={styles.closeButton}>
                        <Text>X</Text>
                    </Pressable>
                    <TextInput
                        placeholder="Firstname"
                        style={styles.input}
                        value={firstname}
                        onChangeText={(text) => setFirstname(text)}
                    />
                    <TextInput
                        placeholder="Lastname"
                        style={styles.input}
                        value={lastname}
                        onChangeText={(text) => setLastname(text)}
                    />
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
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.input}
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                    <Pressable style={styles.signUpButton} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign up</Text>
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
    signUpButton: {
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
