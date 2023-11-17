import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Jsitems/Store'
import HomeScreen from './Screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from './Screens/MapScreen'
import Home from './Components/Home'
import StartPage from './Components/StartPage'
import Otp from './Components/Otp'
import Payment from './Components/Payment'
import MyRides from './Components/MyRides'
import Rides from './Components/Rides'
import Parcel from './Components/Parcel'
import MyRideMain from './Components/MyRideMain'
import Safty from './Components/Safty'
import ComplteProfile from './Components/ComplteProfile'
import Profile from './Components/Profile'

const App = () => {
 
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
     <NavigationContainer>
      <SafeAreaProvider>
       <Stack.Navigator 
       initialRouteName='Profile'
       screenOptions={{headerShown:false}}>

        <Stack.Screen name='Home' component={Home}/>

        <Stack.Screen name='Start' component={StartPage}/>
        <Stack.Screen name='Otp' component={Otp}/>

        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='Myridemain' component={MyRideMain}/>
        <Stack.Screen name='Myride' component={MyRides}/>
        <Stack.Screen name='Ride' component={Rides}/>
        <Stack.Screen name='Parcel' component={Parcel}/>
        <Stack.Screen name='Safety' component={Safty}/>
        <Stack.Screen name='Comprofile' component={ComplteProfile}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Homese' component={HomeScreen}/>


      {/* <Stack.Screen name='HomeScreen' component={HomeScreen}
       options={{headerShown:false}}
      /> */}

<Stack.Screen name='MapScreen' component={MapScreen}
      
      />

       </Stack.Navigator>
      </SafeAreaProvider>

     </NavigationContainer>
    </Provider>
  )
}

export default App


const styles = StyleSheet.create({})