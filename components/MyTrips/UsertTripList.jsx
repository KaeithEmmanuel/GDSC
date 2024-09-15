import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import UserTripCard from "./UserTrpCard"; // Correct the import based on your file name.
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
const UserTripList = ({ userTrips }) => {
  const navigation = useNavigation(); // Use navigation to navigate to different screens.
  const LatestTrip = JSON.parse(userTrips[0]?.tripData);
  const router = useRouter();
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {LatestTrip?.locationInfo?.photoRef ? (
          <Image
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                LatestTrip?.locationInfo?.photoRef +
                "&key="+process.env.GOOGLE_MAPS_API_KEY,
            }}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover", // Use resizeMode instead of objectFit in React Native.
              borderRadius: 15,
            }}
          />
        ) : (
          <Image
            source={require("./../../assets/images/home.jpeg")}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover",
              borderRadius: 15,
            }}
          />
        )}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "outfit-medium",
              color: Colors.BLACK,
            }}
          >
            {userTrips[0]?.tripPlan?.trip?.destination}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontFamily: "outfit",
                color: Colors.GRAY,
              }}
            >
              {moment(LatestTrip?.startDate).format("DD MMM yyyy")}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "outfit",
                color: Colors.GRAY,
              }}
            >
              {userTrips[0]?.tripPlan?.trip?.travelers}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: { trip: JSON.stringify(userTrips[0]) },
              })
            }
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "outfit-medium",
                fontSize: 15,
              }}
            >
              See Your Plan
            </Text>
          </TouchableOpacity>
        </View>
        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
};

export default UserTripList;
