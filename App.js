import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import LoginChoose from './screens/LoginChoose';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';
import SearchVenuePernikahan from './screens/SeachVenuePernikahan';
import VenueList from './screens/VenueList';
import VenueDetail from './screens/VenueDetail.js';
import PackageSelection from './screens/PackageSelection.js';
import ChatScreen from './screens/ChatScreen.js';
import ProfileScreen from './screens/ProfileScreen';
import EditProfile from './screens/EditProfile.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginChoose" component={LoginChoose} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="SearchVenuePernikahan" component={SearchVenuePernikahan}/>
        <Stack.Screen name="VenueList" component={VenueList}/>
        <Stack.Screen name="VenueDetail" component={VenueDetail}/>
        <Stack.Screen name="PackageSelection" component={PackageSelection}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;