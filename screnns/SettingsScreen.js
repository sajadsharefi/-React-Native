import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const navigation = useNavigation();

  return (
    <View>
      <Text>Settings Screen</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SettingsScreen;