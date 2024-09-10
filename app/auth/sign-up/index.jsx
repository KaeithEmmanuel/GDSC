import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../../constants/Colors";
import { auth } from "../../../configs/FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const OnCreateAccount = () => {
    if (email == "" && password == "" && fullName == "") {
      ToastAndroid.show(
        "Please enter all the details",
        ToastAndroid.LONG
      );
      return;
    }

    console.log(email, password, fullName);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        router.replace('mytrip')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  };
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
        paddingTop: 50,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30, marginTop: 30 }}>
        Create New Account
      </Text>
      <View style={{ marginTop: 35 }}>
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          onChangeText={(value) => setFullName(value)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={OnCreateAccount}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
        onPress={() => router.replace("auth/sign-in")}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Already Have An Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    fontFamily: "outfit",
    marginTop: 8,
  },
});

export default SignUp;
