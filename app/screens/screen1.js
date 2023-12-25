// Screen1.js
import React , {useEffect,useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Button, Image ,ImageBackground, TouchableOpacity , StatusBar , Platform} from 'react-native';
import axios from 'axios';
const Screen1 = ({ navigation }) => {

  const [product, setProduct] = useState("");
  const apiUrl = Platform.OS === 'web' ? 'http://localhost:7500/product' : 'http://192.168.1.10:7500/product'; // don't forget to change ip address for the apiUrl

  useEffect(()=>{
    axios.get(apiUrl)
    .then((response)=>{
      console.log('Successfully got the product data');
      console.log('products :>> ', response.data);
      setProduct(response.data);
    })
    .catch((err)=>{
      console.error(`An error occurred while fetching the products ${err}`);
    })
  }
    
  ,[])

  const renderProduct = () => {
    return product.map((item) => (
      <View key={item._id}>
        <TouchableOpacity>
          <Image source={{ uri: `https://paper-spice-bambiraptor.glitch.me/productImg/${item.imgPath}` }} style={{ width: 200, height: 200 }} />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Name: {item.proTitle}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Price: {item.proPrice} Taio</Text>
      </View>
    ));
  }
  

  return (
    <View style={styles.container}>
        {renderProduct()}
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('Screen2')}
        />
        <Button title='logIn' onPress={()=> navigation.navigate('LogIn') } /> 

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: Platform.OS === 'web' ? '100%' : 500 ,
  },
})

export default Screen1;
