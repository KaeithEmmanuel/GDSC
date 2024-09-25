import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSearchParams } from 'expo-router';

const EventDetailScreen = () => {
  const { name, picture, date, place, description } = useSearchParams();

  return (
    <View style={styles.container}>
      <Image source={{ uri: picture }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.date}>Date: {date}</Text>
      <Text style={styles.place}>Location: {place}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
  place: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});

export default EventDetailScreen;
