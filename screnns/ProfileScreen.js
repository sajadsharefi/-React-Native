import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
      const navigation = useNavigation();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
              title="Logout"
              onPress={() => navigation.navigate('Login')}
            />
    </View>
  );
};

export default ProfileScreen;