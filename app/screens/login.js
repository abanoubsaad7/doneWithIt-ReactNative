import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const apiUrl = Platform.OS === 'web' ? 'http://localhost:7500/login' : 'http://192.168.1.10:7500/login'; // don't forget to change ip address for the apiUrl

  // Prepare the data to be sent in the request body
  const data = {
    username: username,
    password: password,
  };

  const handleSubmit = () => {
    // Alternatively, you can use Axios for the POST request
    axios
      .post(apiUrl, data)
      .then((response) => {
        // Handle the response data
        console.log(response.data);
        if(response.data.success == true){
          alert(response.data.message)
          navigation.navigate('Profile')
        }else{
          alert(response.data.message)
        }
        
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
      
      
  };
  

  return (
    <View style={styles.container}>
      <Text>username</Text>
      <TextInput
        placeholder="Enter Username"
        style={styles.loginInput}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text>password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter Password"
        style={styles.loginInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="login" onPress={handleSubmit} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Platform.OS === "web" ? "100%" : 500,
  },
  loginInput: {
    margin: "3%",
  },
});

export default Login;
