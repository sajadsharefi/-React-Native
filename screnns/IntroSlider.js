import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Welcome',
    text: 'This is the first slide.',
//    image: require('./assets/slide1.png'), // تصویر مربوط به اسلاید
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Enjoy!',
    text: 'This is the second slide.',
//    image: require('./assets/slide2.png'), // تصویر مربوط به اسلاید
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Get Started',
    text: 'This is the third slide.',
//    image: require('./assets/slide3.png'), // تصویر مربوط به اسلاید
    backgroundColor: '#22bcb5',
  },
];

const IntroSlider = ({ onDone }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone} // تابعی که بعد از اتمام نمایش اسلایدها فراخوانی می‌شود
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default IntroSlider;