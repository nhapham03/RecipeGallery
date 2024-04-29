import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { images } from './imageList';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={images[currentIndex].url} style={styles.image} />
      <Text style={styles.description}>{images[currentIndex].description}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={handlePrevious} style={styles.button} />
        <Button title="Next" onPress={handleNext} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: 15,
      marginBottom: 20,
      borderWidth: 3,
      borderColor: '#ff6f61', 
    },
    description: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#ff6f61',
        borderWidth: 2,
        borderColor: '#ff6f61', 
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
  

export default Gallery;
