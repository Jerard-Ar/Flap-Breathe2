// tabs/StartScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, ImageBackground, Image, Dimensions } from 'react-native';
import AuthComponent from '../../components/AuthComponent';

const screenWidth = Dimensions.get('window').width;

export default function StartScreen() {
    const [showAuthOptions, setShowAuthOptions] = useState(false);

    return (
        <ImageBackground
            source={require('@/assets/images/background.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.container}>
                {/* Title Image */}
                <Image
                    source={require('@/assets/images/title.png')}
                    style={styles.titleImage}
                    resizeMode="contain"
                />

                {showAuthOptions ? (
                    <AuthComponent />
                ) : (
                    <Pressable
                        style={styles.startButton}
                        onPress={() => setShowAuthOptions(true)}
                    >
                        <Text style={styles.startButtonText}>Start</Text>
                    </Pressable>
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center', // Centers content horizontally
        justifyContent: 'center', // Centers content vertically
        width: '100%', // Ensures the image takes full width
        height: '100%', // Ensures the image takes full height
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    startButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    startButtonText: {
        color: 'black',
        fontSize: 18,
    },
    titleImage: {
        width: screenWidth * 0.9,  
        height: screenWidth * 0.5, 
        marginBottom: 3,
    },
});
