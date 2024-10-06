import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
      const navigation = useNavigation();

  return (
    <View>
      <Text>About Screen</Text>
      <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default AboutScreen;