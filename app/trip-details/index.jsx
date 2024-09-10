import { View, Text, Image } from "react-native";
import React, { useEffect ,useState} from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
export default function TripDetails() {
  const formatData = (data) => {
    return JSON.parse(data);
  };
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripDetails(JSON.parse(trip));
  }, []);
  return tripDetails && (
    <View>
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            formatData(tripDetails?.tripData)?.locationInfo?.photoRef+
            "&key=AIzaSyBO4KQvkzDP8w9bjo7UcwtL-05xPbkI-5k",
        }}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "cover", // Use resizeMode instead of objectFit in React Native.
          borderRadius: 15,
        }}
      />
    </View>
  );
}
