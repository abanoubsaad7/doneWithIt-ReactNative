import React , {useEffect , useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const Profile = ({navigation}) =>{

  const apiUrl = Platform.OS === 'web' ? 'http://localhost:7500/profile' : 'http://192.168.1.10:7500/profile'; // don't forget to change ip address for the apiUrl
  const [userData,setUserData] = useState(null);

  useEffect(()=>{
    axios.get(apiUrl)
    .then((response)=>{
      setUserData(response.data.user);
    })
    .catch((err)=>{
      console.log('err :>> ', err);
    })
  },[])
  

return(
  <View style={styles.container}>
      {userData ? (
        <View>
          <TouchableOpacity onPress={()=> console.log('img clicked')}>
          <Image source={require('../assets/thumb-1920-936378.jpg')} style={{width:400 , height:400 , borderColor: 'black' , borderWidth:1}} />
          </TouchableOpacity>
          <Text>Name: {userData.username}</Text>
          <Text>Email: {userData.Number}</Text>
          {/* Display other user data as needed */}
          <Button title='show products' onPress={()=> navigation.navigate('Screen1')} />
        </View>
      ) : (
        <Text>Loading user data...</Text>
      )}
    </View>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;