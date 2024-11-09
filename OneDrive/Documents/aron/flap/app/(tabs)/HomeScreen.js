import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, ImageBackground, Image, Dimensions, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileComponent from '../../components/ProfileComponent';
import AirflowSelection from '../../components/AirflowSelection';
import AssessmentComponent from '../../components/AssessmentComponent';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
    const [showProfile, setShowProfile] = useState(false);
    const [showAirflowSelection, setShowAirflowSelection] = useState(false);
    const [showAssessment, setShowAssessment] = useState(false);
    const [showLog, setShowLog] = useState(false); 

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

                {showProfile ? (
                    <ProfileComponent onClose={() => setShowProfile(false)} />
                ) : showAirflowSelection ? (
                    <AirflowSelection onClose={() => setShowAirflowSelection(false)} />
                ) : showAssessment ? (
                    <AssessmentComponent onClose={() => setShowAssessment(false)} />
                ) : (
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={() => setShowProfile(true)}
                        >
                            <Ionicons name="person-outline" size={50} color="black" />
                            <Text style={styles.buttonText}>Profile</Text>
                        </Pressable>
                        <Pressable
                            style={styles.button}
                            onPress={() => setShowAirflowSelection(true)}
                        >
                            <Ionicons name="medkit-outline" size={50} color="black" />
                            <Text style={styles.buttonText}>Start Game</Text>
                        </Pressable>
                        <Pressable
                            style={styles.button}
                            onPress={() => setShowAssessment(true)}
                        >
                            <Ionicons name="clipboard-outline" size={50} color="black" />
                            <Text style={styles.buttonText}>Assessment</Text>
                        </Pressable>
                        <Pressable
                            style={styles.button}
                            onPress={() => setShowLog(true)} // Opens the log image modal
                        >
                            <Ionicons name="document-outline" size={50} color="black" />
                            <Text style={styles.buttonText}>Daily Log</Text>
                        </Pressable>
                    </View>
                )}

                {/* Modal for Daily Log */}
                <Modal
                    visible={showLog}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setShowLog(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Pressable
                                style={styles.closeButton}
                                onPress={() => setShowLog(false)}
                            >
                                <Text style={styles.closeButtonText}>X</Text>
                            </Pressable>
                            <Image
                                source={require('@/assets/images/log.jpg')}
                                style={styles.logImage}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleImage: {
        width: screenWidth * 0.9,
        height: screenWidth * 0.5,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        marginTop: 10,
        fontSize: 14,
        color: 'purple',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'gray',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    logImage: {
        width: '100%',
        height: 400, // Adjust height as needed
        borderRadius: 10,
    },
});
