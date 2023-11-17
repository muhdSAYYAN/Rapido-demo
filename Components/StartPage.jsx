import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const StartPage = () => {

  const navigation = useNavigation()

  const [name, setName] = useState('');
 const [phoneNumber,setPhonenumber] = useState('');
 const [Nameerror,setNameerror] = useState('');
 const [phoneNumberError,setPhonenumberError] = useState('');
 const [validCondition,setValidCondition] = useState(false);


 const storeData = async ()=>{
  if (validCondition) {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('phonenumber', phoneNumber);
      navigation.navigate('Otp'); 
    } catch (error) {
      console.error('Error', error);
    }
  }
 }


 useEffect(() => {
  const phoneNumberPattern = /^[0-9]{10}$/;
  const namePattern = /^[A-Za-z\s]{2,}$/;
   
  if (phoneNumberPattern.test(phoneNumber) && namePattern.test(name)) {
    setPhonenumberError('');
    setNameerror('');
    setValidCondition(true);
  } else {
    if (!phoneNumberPattern.test(phoneNumber)) {
      setPhonenumberError('Please enter a valid 10-digit phone number');
    } else {
      setPhonenumberError('');
    }

    if (!namePattern.test(name)) {
      setNameerror('Please enter a valid name (at least 2 characters, no special characters or numbers)');
    } else {
      setNameerror('');
    }

    setValidCondition(false);
  }
}, [phoneNumber, name]);


 
//   const validateNumber = ()=>{
//   const phoneNumberPattern = /^[0-9]{10}$/;

//   if(!phoneNumberPattern.test(phoneNumber)){
//     setPhonenumberError("Please enter a valid 10-digit phone number");
   
//   }else{
//     setPhonenumberError('');
   
//   }
//  }

 


  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:"white",justifyContent:"space-between",alignItems:"center"}}>
      <View style={{width:"100%",height:200}}>
        <Image
        source={require('./Assets/rapido-banner.png')}
        style={{width:"100%",height:200}}/>

        

      </View>
    
      <View style={{width:"100%",height:300,paddingLeft:20,gap:20}}>
      <Text style={{fontSize:19,color:"black",fontWeight:"700"}}>Let's get started</Text>
        <Text style={{fontSize:15,color:"gray"}}>Verify your account using OTP</Text>


        <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
     
     <TextInput
      placeholder='Enter name'
      style={{width:"80%",fontSize:16}}
      value={name}
      onChangeText={(text) => {
        setName(text);
        setNameerror('');
      }}
     />
     </View>
     {Nameerror ? <Text style={{ color: 'red' }}>{Nameerror}</Text> : null}
    

     <View style={{width:"90%",height:50,borderWidth:2,borderRadius:3,borderColor:"lightgray",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
     <Text style={{width:50,fontSize:19,color:"black",fontWeight:"700"}}>+91</Text>
     
     <TextInput
      placeholder='Enter your phone number'
      style={{width:"80%",fontSize:16}}
      value={phoneNumber}
      onChangeText={(text)=>{
        setPhonenumber(text);
        setPhonenumberError('');
      }}
     />
     
     </View>
     {phoneNumberError ?(
      <Text style={{color:"red"}}>{phoneNumberError}</Text>
     ):null}


     
   
   
     
      </View>
     
      <TouchableOpacity
       style={{width:"90%",height:50,
       backgroundColor:validCondition ? "orange" : "lightgray",
       alignItems:"center",justifyContent:"center",borderRadius:7}}
       onPress={storeData} 
      >
        <Text style={{fontSize:16,
          color: validCondition ? "white" : "gray",
          fontWeight:"600",}}>Proceed</Text>
     </TouchableOpacity>

     <Text>privecy policy</Text>
    </KeyboardAvoidingView>
  )
}

export default StartPage

const styles = StyleSheet.create({})