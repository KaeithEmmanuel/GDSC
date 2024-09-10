import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModel";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./../../configs/FireBaseConfig";
const GenerateTrip = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { tripdata, setTripData } = useContext(CreateTripContext); // Ensure that tripdata is correctly passed from the context
  const User = auth.currentUser;
  useEffect(() => {
    if (tripdata) {
      GenerateAiTrip();
    }
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripdata?.locationInfo?.name
    )
      .replace("{totalDays}", tripdata?.totalDays)
      .replace("{totalNight}", tripdata?.totalDays - 1)
      .replace("{traveller}", tripdata?.travellerCount?.title)
      .replace("{budget}", tripdata?.budget)
      .replace("{totalDays}", tripdata?.totalDays)
      .replace("{totalNight}", tripdata?.totalDays - 1);

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    const tripResponse = JSON.parse(result.response.text());
    
    setLoading(false);
    const docId = (Date.now()).toString();
    const _result = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: User.email,
      tripPlan: tripResponse,
      tripData: JSON.stringify(tripdata),
      docId: docId
    });
    router.push("(tabs)/mytrip");
  };

  return (
    <View
      style={{
        padding: 25,
        marginTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          textAlign: "center",
        }}
      >
        Please Wait ....
      </Text>
      <Text
        style={{
          marginTop: 40,
          fontFamily: "outfit-medium",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        We are working to generate your dream trip
      </Text>
      <Image
        source={require("./../../assets/airline-185.gif")}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "contain", // Changed from objectFit to resizeMode for React Native
          borderRadius: 40,
          margin: "auto",
        }}
      />
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.GRAY,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Do not go back
      </Text>
    </View>
  );
};

export default GenerateTrip;
