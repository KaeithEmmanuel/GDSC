import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const EventCard = ({ event }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => { console.log('Event Card Pressed'); }}
    >
      <Image source={{ uri: event.picture }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{event.name}</Text>
        <View style={styles.info}>
          <Ionicons name="calendar-outline" size={16} color="#666" />
          <Text style={styles.date}>{event.date}</Text>
        </View>
        <View style={styles.info}>
          <Ionicons name="location-outline" size={16} color="#666" />
          <Text style={styles.place}>{event.place}</Text>
        </View>
        <Text style={styles.description}>{event.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200, // Adjusted height for better UI
    resizeMode: 'cover',
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  place: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default EventCard;
