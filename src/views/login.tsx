import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import style_01 from "../styles/style_01";
import axios from "axios";
import Home from "./home";
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Variables y métodos constantes para Login
const URL = "https://fakestoreapi.com";
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const Login = () => {
  const navigation = useNavigation<NavigationProp>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter username and password");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(URL+"/auth/login", {
        username,
        password,
      });

      const data = await response.data;
      //console.log(data);

        if (data.token) {
        Alert.alert("Success", "Login successful!");
        console.log("TOKEN:", data.token);
        navigation.replace("Home")
      } else {
        Alert.alert("Login Failed", "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      //console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={style_01.container}>
      <Text style={style_01.title}>Welcome Back</Text>

      <TextInput
        style={style_01.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={style_01.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={style_01.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={style_01.buttonText}>
          {loading ? "Logging in..." : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;