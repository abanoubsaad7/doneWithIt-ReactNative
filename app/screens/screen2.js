// Screen2.js
import React from 'react';
import { View, Text, StyleSheet , Button , Image ,ImageBackground, TouchableOpacity, StatusBar ,Platform} from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/icon.png')} style={styles.container}>
        <TouchableOpacity onPress={()=> console.log('hiiii')}>
          <Image source={require('../assets/thumb-1920-936378.jpg')} style={{width:500 , height:500}} resizeMode='contain' />
        </TouchableOpacity>
        <Text>Screen 2</Text>
        <Button
          title="Go to Screen 1"
          onPress={() => navigation.navigate('Screen1')} />
      </ImageBackground>
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

export default Screen2;
