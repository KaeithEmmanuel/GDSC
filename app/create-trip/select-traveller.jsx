import { View, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Colors } from "./../../constants/Colors";
import { SelectTravellerList } from "./../../constants/Options";
import { FlatList } from "react-native-gesture-handler";
import OptionCard from "./../../components/CreateTrip/OptionCard";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "./../../context/CreateTripContext";
import { useRouter } from "expo-router";
export default function SelectTraveller() {
  const [selectTraveller, setSelectedTraveller] = useState();
  const { tripdata, setTripdata } = useContext(CreateTripContext);
  const router=useRouter()
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  useEffect(() => {
    setTripdata({ ...tripdata, travellerCount: selectTraveller });
  }, [selectTraveller]);

  useEffect(() => {
    console.log(tripdata);
  }, [tripdata]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 35, fontFamily: "outfit-bold", marginTop: 35 }}>
        Who Is Traveling
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 23,
          }}
        >
          Choose Your Travellers
        </Text>
        <FlatList
          data={SelectTravellerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveller(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectedOption={selectTraveller} />
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      <TouchableOpacity 
      onPress={()=>router.push('/create-trip/select-dates')}
      style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop:20
      }}>
        <Text style={{
          textAlign:'center',
          color:Colors.WHITE,
          fontFamily:'outfit-medium',
          fontSize:20
        }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
