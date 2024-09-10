import { View, Text } from "react-native";
import React from "react";
import { Colors } from "./../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

const OptionCard = ({ option, selectedOption }) => {
  return (
    <View
      style={[
        {
          padding: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedOption?.id == option?.id && { borderWidth:3},
      ]}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          {option?.title}
        </Text>
        <Text
          style={{ fontSize: 16, fontFamily: "outfit", color: Colors.GRAY }}
        >
          {option?.desc}
        </Text>
      </View>
      <MaterialIcons name={option.icon} size={50} color="#555555"/>
    </View>
  );
};

export default OptionCard;
