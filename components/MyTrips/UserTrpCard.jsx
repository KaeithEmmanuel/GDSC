import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";
export default function UserTripCard({ trip }) {
  const formatData = (data) => {
    return JSON.parse(data);
  };
  return (
    <View
    style={{
        marginTop:15,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image
            source={{
                uri:
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                  formatData(trip.tripData)?.locationInfo?.photoRef +
                  "&key="+process.env.GOOGLE_MAPS_API_KEY
                }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 15,
            }}
          />
      <View>
        <Text style={{ fontSize: 18, fontFamily: "outfit-medium" }}>
          {trip.tripPlan?.trip?.destination}
        </Text>
        <Text
          style={{ fontSize: 14, fontFamily: "outfit", color: Colors.GRAY }}
        >
          {moment(formatData(trip.tripData).startDate).format("DD-MM-YYYY")}
        </Text>
        <Text
          style={{ fontSize: 14, fontFamily: "outfit", color: Colors.GRAY }}
        >
          Traveling:{trip?.tripPlan?.trip?.travelers}
        </Text>
      </View>
    </View>
  );
}
