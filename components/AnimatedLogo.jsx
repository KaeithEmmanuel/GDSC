import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const MorphingLogo = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  // Set up morphing animation
  useEffect(() => {
    // Looping scale and opacity animations for a morph-like effect
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1.3,  // Increase size
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          Animated.timing(opacityAnim, {
            toValue: 0.6,  // Fade out slightly
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1,  // Return to original size
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,  // Fade back to original
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
      ])
    ).start();
  }, [scaleAnim, opacityAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./../assets/images/download.png')}
        style={[
          styles.image,
          {
            transform: [
              { scale: scaleAnim },  // Apply scaling effect
            ],
            opacity: opacityAnim,   // Apply opacity changes
          },
        ]}
        resizeMode="contain"
      />
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
    width: 200,
    height: 200,
  },
});

export default MorphingLogo;
