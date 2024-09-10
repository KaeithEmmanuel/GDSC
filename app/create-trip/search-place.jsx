import { View, TextInput, Button, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "./../../context/CreateTripContext";
import { useContext } from "react";
export default function SearchPlace() {
  const navigation = useNavigation();
  const { tripdata, setTripdata } = useContext(CreateTripContext);
  const router=useRouter();
  useEffect(() => {
    console.log(tripdata);
  }),[tripdata];
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 86,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
        <GooglePlacesAutocomplete
          placeholder="Search Place"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setTripdata({
              locationInfo: {
                name: data.description,
                coordinates: details?.geometry.location,
                photoRef: details?.photos[0]?.photo_reference,
                url: details?.url,
              },
            });
            router.push('/create-trip/select-traveller');
          }}
          query={{
            key: "AIzaSyBO4KQvkzDP8w9bjo7UcwtL-05xPbkI-5k",
            language: "en",
          }}
          styles={{
            textInputContainer:{
              borderWidth:1,
              borderRadius:5,
              marginTop:25
            }
          }}
        />
    </View>
  );
}
