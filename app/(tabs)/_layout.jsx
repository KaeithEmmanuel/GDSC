import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from '@expo/vector-icons/Feather';
import { Colors } from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: { backgroundColor: Colors.WHITE }, // Ensures the tab bar has a background color
      }}
    >
      <Tabs.Screen
        name="Events"
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <Feather name="bell" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-sharp" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  );
}