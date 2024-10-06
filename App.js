import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import IntroSlider from './screnns/IntroSlider';
import LoginScreen from './screnns/LoginScreen';
import HomeScreen from './screnns/HomeScreen';
import SettingsScreen from './screnns/SettingsScreen';
import ProfileScreen from './screnns/ProfileScreen';
import AboutScreen from './screnns/AboutScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="settings" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="information-circle" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
  );
}

export default function App() {
const [showSlider, setShowSlider] = useState(true);

  const handleDone = () => {
    setShowSlider(false);
  };

  return (
    <NavigationContainer>
          <Stack.Navigator>
            {showSlider ? (
              <Stack.Screen name="Intro">
                {() => <IntroSlider onDone={handleDone} />}
              </Stack.Screen>
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={MainTabs} />
              </>
            )}
          </Stack.Navigator>
    </NavigationContainer>
  );
}