// AppNavigator.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer style={{backgroundColor:"black"}}>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
