import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../../constants/Colors";
import { auth } from "../../../configs/FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

const SignUp = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState(null);

  const OnCreateAccount = async () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please enter all the details", ToastAndroid.LONG);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      router.replace("");
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <View style={{ padding: 25, backgroundColor: Colors.WHITE, height: "100%", paddingTop: 50 }}>
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
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity onPress={OnCreateAccount} style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={() => router.replace("auth/sign-in")}>
        <Text style={styles.signInText}>Already Have An Account</Text>
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
  imagePicker: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  imagePlaceholder: {
    color: Colors.GRAY,
    fontFamily: "outfit",
  },
  createAccountButton: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginTop: 50,
  },
  createAccountText: {
    color: Colors.WHITE,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
  signInButton: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 1,
  },
  signInText: {
    color: Colors.PRIMARY,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
});

export default SignUp;
