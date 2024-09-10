import { View, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";
import { useRouter } from "expo-router";
export default function SelectBudget() {
  const router = useRouter();
  const navigation = useNavigation();
  const { tripdata, setTripdata } = useContext(CreateTripContext);
  const [selectedOption, setSelectedOption] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  useEffect(() => {
    setTripdata({ ...tripdata, budget: selectedOption?.title });
  }, [selectedOption]);
  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Please select option", ToastAndroid.LONG);
      return;
    }
    router.push('/create-trip/review-trip')
  };
  return (
    <View
      style={{
        paddingTop: 75,
        padding: 15,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 35, fontFamily: "outfit-bold", marginTop: 20 }}>
        SelectBudget
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Choose spending habits for your Trip
        </Text>
        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
              }}
              onPress={() => setSelectedOption(item)}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={onClickContinue}
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
