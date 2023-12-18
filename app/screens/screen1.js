// Screen1.js
import React from 'react';
import { View, Text, StyleSheet, Button, Image ,ImageBackground, TouchableOpacity , StatusBar , Platform} from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/icon.png')} style={styles.container}>
        <TouchableOpacity onPress={()=> console.log('hiiii')}>
          <Image source={require('../assets/esmo.png')} style={{width:400 , height:400}} resizeMode='contain' />
        </TouchableOpacity>
        <Text>Screen 1</Text>
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('Screen2')}
        />
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
  },
})

export default Screen1;
