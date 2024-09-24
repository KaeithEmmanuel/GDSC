// NotificationsPage.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const notificationsData = [
  {
    id: '1',
    title: 'New Event Created',
    description: 'A new event "Webathon 2.0" has been scheduled for February 24, 2024.',
    timestamp: '2024-01-15',
  },
  {
    id: '2',
    title: 'Event Reminder',
    description: 'Don’t forget to register for the "Solution Challenge" happening on February 11, 2024.',
    timestamp: '2024-01-10',
  },
  {
    id: '3',
    title: 'Workshop Registration Open',
    description: 'Registration is now open for the "Flutter Workshop". Sign up today!',
    timestamp: '2024-01-05',
  },
  {
    id: '4',
    title: 'Campus Contest Update',
    description: 'New updates on the Campus Automation Contest are available. Check them out!',
    timestamp: '2024-01-02',
  },
  // Add more notifications as needed
];

const NotificationCard = ({ notification }) => {
  return (
    <View style={styles.notificationCard}>
      <Ionicons name="notifications-outline" size={30} color="#4A90E2" />
      <View style={styles.notificationDetails}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.description}>{notification.description}</Text>
        <Text style={styles.timestamp}>{notification.timestamp}</Text>
      </View>
    </View>
  );
};

const NotificationsPage = () => {
  const renderNotification = ({ item }) => <NotificationCard notification={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationsData}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 60,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 15,
    marginBottom: 15,
  },
  notificationDetails: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },

});

export default NotificationsPage;
