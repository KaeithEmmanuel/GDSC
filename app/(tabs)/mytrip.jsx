import { View, Text, ActivityIndicator } from "react-native";
import React, { useState,useEffect } from "react";
import { Colors } from "../../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartNewTripCard from "../../components/MyTrips/SrartNewTripCard";
import { auth, db } from "./../../configs/FireBaseConfig";
import { getDocs } from "firebase/firestore";
import UsertTripList from "../../components/MyTrips/UsertTripList";
import { collection, query, where } from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";
export default function MyTrip() {
  const [userTrip, setUserTrip] = useState([]);
  const User = auth.currentUser;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    GetMyTrips();
  }, [User]);
  const GetMyTrips = async () => {
    setIsLoading(true);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", User.email)
    );
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrip((prev) => [...prev, doc.data()]);
    });
    setIsLoading(false);
  };
  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        flex: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 35 }}>My Trip</Text>
        <AntDesign name="pluscircle" size={50} color="black" />
      </View>
      {isLoading && <ActivityIndicator size={"large"} color={Colors.PRIMARY} />}
      {userTrip?.length === 0 ? <StartNewTripCard /> : <UsertTripList userTrips={userTrip} />}
    </ScrollView>
  );
}
