import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, useRouter } from "expo-router";
import { useEffect , useState} from "react";
import { Colors } from "./../../../constants/Colors";
import { auth } from "./../../../configs/FireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSignIn = () => {
    if (email == "" && password == "") {
      ToastAndroid.show("Please enter email and password", ToastAndroid.LONG);
      return;
    }

    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.replace('/mytrip')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, error.code);
        if(errorCode == "auth/invalid-credential"){
          ToastAndroid.show("Invalid Credntials", ToastAndroid.LONG);
          return;   
        }
      });
  };
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.WHITE,
        marginTop: 40,
        height: "100%",
        paddingTop: 80,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30, marginTop: 30 }}>
        Lets SignYou In
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          marginTop: 20,
          color: Colors.GRAY,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          marginTop: 10,
          color: Colors.GRAY,
        }}
      >
        You've been missed
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="Enter Email"></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
        onPress={onSignIn}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Sign In
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
        onPress={() => router.replace("auth/sign-up")}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
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
