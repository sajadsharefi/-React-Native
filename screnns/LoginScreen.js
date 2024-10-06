import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome! Press the button to enter the app.</Text>
      <Button
        title="Enter"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;