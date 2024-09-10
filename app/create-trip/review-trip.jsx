import { View, Text ,Image} from "react-native";
import React, { useEffect,useContext,useState } from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import moment from "moment";
import {useRouter} from 'expo-router'
import { TouchableOpacity } from "react-native";
export default function ReviewTrip() {
  const router=useRouter();
  const navigation = useNavigation();
  const {tripdata, setTripdata} = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
      headerTitile: " ",
    });
  }, []);

  const onClickBuild = () => {  
    router.replace('/create-trip/generate-trip')
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 35, marginTop: 20 }}>
        Review Your Trip
      </Text>
      <View
        style={{
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Before Generating your trip please review your slection
        </Text>
        <View style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            gap:20
        }}>
          <Ionicons name="location" size={35} color="black" />
          <View>
            <Text style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY
            }}>Destination</Text>
            <Text style={{
                fontFamily: "outfit-medium",
                fontSize: 20
            }}>{tripdata?.locationInfo?.name}</Text>
          </View>
        </View>
        <View style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            gap:20
        }}>
          <Ionicons name="person" size={35} color="black" />
          <View>
            <Text style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY
            }}>Travellers</Text>
            <Text style={{
                fontFamily: "outfit-medium",
                fontSize: 20
            }}>{tripdata?.travellerCount?.people}</Text>
          </View>
        </View>
        <View style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            gap:20
        }}>
          <Ionicons name="calendar" size={35} color="black" />
          <View>
            <Text style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY
            }}>Selected Dates</Text>
            <Text style={{
                fontFamily: "outfit-medium",
                fontSize: 20
            }}>{moment(tripdata?.startDate).format('DD MMM')
            +"To"+moment(tripdata?.endDate).format('DD MMM')}
            ( {tripdata?.totalDays} days)</Text>
          </View>
        </View>
        <View style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            gap:20
        }}>
          <MaterialIcons name="currency-rupee" size={35} color="black" />
          <View>
            <Text style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY
            }}>Budget</Text>
            <Text style={{
                fontFamily: "outfit-medium",
                fontSize: 20
            }}>{tripdata?.budget}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={()=>onClickBuild()}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
