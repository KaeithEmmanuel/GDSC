import { View, Text, ToastAndroid } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "./../../constants/Colors";
import { Calendar } from "react-native-calendars"; // Importing Calendar from react-native-calendars
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { CreateTripContext } from "./../../context/CreateTripContext";
import moment from "moment";

const SelectDates = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedRange, setSelectedRange] = useState({}); // State to hold selected date range
  const { tripdata, setTripdata } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, [navigation]);

  // Handler function when a date is selected
  const onDateSelect = (day) => {
    const date = moment(day.dateString);
    if (!startDate || (startDate && endDate)) {
      // Start a new range if no start date or both start and end are selected
      setStartDate(date);
      setEndDate(null);
      setSelectedRange({
        [day.dateString]: {
          startingDay: true,
          endingDay: true,
          color: Colors.BLACK, // Black color for start and end dates
          textColor: Colors.WHITE, // White text for selected dates
        },
      });
    } else if (startDate && !endDate) {
      // Set the end date and complete the range
      const range = createRange(startDate, date);
      setEndDate(date);
      setSelectedRange(range);
    }
  };

  // Function to create a range of dates between start and end
  const createRange = (start, end) => {
    const range = {};
    const startDate = new Date(start);
    const endDate = new Date(end);
    const currentDate = new Date(startDate);

    // Mark each date between start and end with black background
    while (currentDate <= endDate) {
      const dateString = currentDate.toISOString().split("T")[0];
      range[dateString] = {
        color: Colors.BLACK,
        textColor: Colors.WHITE,
        startingDay: dateString === start.format("YYYY-MM-DD"),
        endingDay: dateString === end.format("YYYY-MM-DD"),
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return range;
  };

  const onDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      ToastAndroid.show("Please select start and end date", ToastAndroid.LONG);
      return;
    }
    const totalDays = endDate.diff(startDate, "days");
    setTripdata({
      ...tripdata,
      startDate: startDate,
      endDate: endDate,
      totalDays: totalDays + 1,
    });
    router.push("/create-trip/select-budget");
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
      <Text style={{ fontSize: 35, fontFamily: "outfit-bold", marginTop: 20 }}>
        Travel Dates
      </Text>

      {/* Calendar Component */}
      <Calendar
        onDayPress={onDateSelect}
        markingType={"period"} // Marking type for range selection
        markedDates={selectedRange}
        theme={{
          selectedDayBackgroundColor: Colors.PRIMARY, // Black background for selected day
          selectedDayTextColor: Colors.WHITE, // White text for selected day
          todayTextColor: Colors.PRIMARY,
          arrowColor: Colors.PRIMARY,
          dayTextColor: Colors.BLACK,
          textDisabledColor: "gray",
        }}
        minDate={new Date().toISOString().split("T")[0]} // Minimum date is today
        style={{
          marginTop: 20,
        }}
      />

      <View>
        <TouchableOpacity
          onPress={onDateSelectionContinue}
          style={{
            padding: 20,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 35,
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
    </View>
  );
};

export default SelectDates;
