import { StyleSheet, Text, TextInput, View ,TouchableOpacity, Image} from 'react-native'
import React, { useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Otp() {
  

  
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  
  
    const navigation = useNavigation();

    useEffect(() => {
  const retrieveData = async () => {
    try {
      const storedName = await AsyncStorage.getItem('name');
      const storedMobileNumber = await AsyncStorage.getItem('phonenumber');
      console.log('Stored Name:', storedName);
      console.log('Stored Phone Number:', storedMobileNumber);
      if (storedName && storedMobileNumber) {
        setName(storedName);
        setMobileNumber(storedMobileNumber);
      }
    } catch (error) {
      console.error('Error retrieving data: ', error);
    }
  }

  retrieveData();
}, []);

  return (
    <View style={{flex:1,backgroundColor:"orange"}}>
      <View style={{width:"100%",height:150,backgroundColor:"orange",}}>

      </View>
      <View style={{width:"100%",height:500,paddingTop:100,gap:10,paddingLeft:20,borderRadius:20,elevation:10,backgroundColor:"white",position:"relative"}}>
      
      <View>
      <Text style={{fontSize:19,color:"black",fontWeight:"700"}}>Enter the OTP</Text>
        <Text style={{fontSize:15,color:"gray"}}>we have sent an OTP to {mobileNumber}</Text>
      </View>

      <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
     <TextInput
      placeholder='Enter OTP'
      style={{width:"80%",fontSize:16,textAlign:"center"}}
      
     />
     </View>

     <TouchableOpacity
       style={{width:"90%",height:50,
       backgroundColor: "lightgray",
       marginTop:190,
       alignItems:"center",justifyContent:"center",borderRadius:7}}
       onPress={()=> navigation.navigate('Home')}
      >
        <Text style={{fontSize:16,
          color:"gray",
          fontWeight:"600",}}>Proceed</Text>
     </TouchableOpacity>

      </View>

      <Image
       source={require('./Assets/phone.png')}
        style={{width:60,height:60,position:"absolute",top:120,left:40,borderWidth:2,borderColor:"orange",borderRadius:100}}
       />
      
    </View>
  )
}

const styles = StyleSheet.create({})