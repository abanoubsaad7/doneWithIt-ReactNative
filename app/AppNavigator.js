// AppNavigator.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Login from './screens/login';
import Profile from './screens/profile';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1" screenOptions={{
        headerStyle:{
          backgroundColor: '#3498db'
        },
        headerTintColor: '#fff', // Set your desired text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='LogIn' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
