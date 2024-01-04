import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Onboardin from '../screens/Onboarding';
import Register from '../screens/Register';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Add the correct import statement for AsyncStorage


const Onboard = () => {
    const [isFirstLauch, setIsFirstLauch] = useState(false);

    useEffect(() => {
        // Check if isFirstLauch is already saved in AsyncStorage
        AsyncStorage.getItem('isFirstLauch')
            .then(value => {
                if (value === null) {
                    // isFirstLauch is not saved, set it to true and save it
                    setIsFirstLauch(true);
                    AsyncStorage.setItem('isFirstLauch', 'true');
                } else {
                    // isFirstLauch is already saved, set it to false
                    setIsFirstLauch(false);
                }
            })
            .catch(error => {
                console.log('Error retrieving isFirstLauch from AsyncStorage:', error);
            });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isFirstLauch ? (
                    <Stack.Screen options={{ headerShown: false }} name="Onboardin" component={Onboardin} />
                ) : null}
                <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Onboard