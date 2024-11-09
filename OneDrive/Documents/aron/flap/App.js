// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './tabs/StartScreen';
import HomeScreen from './tabs/HomeScreen';
import ProfileComponent from './components/ProfileComponent';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen
                    name="Start"
                    component={StartScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"  // Ensure this matches exactly
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileComponent}
                    options={{ title: 'User Profile' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
