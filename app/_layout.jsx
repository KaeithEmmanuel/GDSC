import { useFonts } from "expo-font";
import { useState } from "react";
import { Stack } from "expo-router";
import { CreateTripContext } from '../context/CreateTripContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  })
  const [tripdata, setTripdata] = useState([])
  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
    <CreateTripContext.Provider value={{ tripdata, setTripdata }}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="index" options={{ headerShown: false }}/> */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
    </GestureHandlerRootView>
  );
}
