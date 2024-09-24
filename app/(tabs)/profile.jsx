// UserProfile.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { signOut } from 'firebase/auth';
import { auth } from '../../configs/FireBaseConfig'; // Import your Firebase config
import { useRouter } from 'expo-router';

const UserProfile = () => {
  const router = useRouter();
  const user = {
    name: 'Kaeith Emmanuel Eddu',
    email: 'kaeith@example.com',
    profilePicture: 'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg',
  };

  const handleEditProfile = () => {
    // Handle edit profile action
    console.log('Edit Profile Pressed');
  };

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log("User signed out!");
      router.replace("auth/sign-in"); // Navigate to sign-in page after logout
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
        <AntDesign name="logout" size={20} color="#fff" style={styles.logoutIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: '#FF4D4D',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutIcon: {
    marginLeft: 5,
  },
});

export default UserProfile;
