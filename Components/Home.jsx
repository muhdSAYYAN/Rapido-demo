import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useState ,useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView from 'react-native-maps'


const Home = () => {

  const navigation = useNavigation()

  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  
  
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuAnimation = new Animated.Value(0);
  // const overlayAnimation = new Animated.Value(0);
  
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
 
  Animated.timing(menuAnimation, {
    toValue: isMenuVisible ? 0 : 1,
    duration: 300,
    useNativeDriver: false,
  }).start();

  // Animated.timing(overlayAnimation, {
  //   toValue: isMenuVisible ? 0 : 1,
  //   duration: 300,
  //   useNativeDriver: false,
  // }).start();


const menuTranslateX = menuAnimation.interpolate({
  inputRange: [-1, 0],
  outputRange: [300, 0],
});

// const overlayOpacity = overlayAnimation.interpolate({
//   inputRange: [0, 1],
//   outputRange: [0, 0.5], // Adjusted opacity range
// });

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
   

  return(

    <View style={{backgroundColor:"white"}}>
      <View style={{height:"50%"}}>
       <MapView
         style={{height:"100%",width:"100%",position:"relative"}}
       />

       <TouchableOpacity style={{backgroundColor:"white",width:"70%",height:45,borderRadius:100,elevation:8,flexDirection:"row",alignItems:"center",position:"absolute" ,top:30,marginLeft:90}} onPress={()=> navigation.navigate("Homese")}>
        <View style={{backgroundColor:"white",width:"100%",height:45,borderRadius:100,elevation:8,flexDirection:"row",alignItems:"center",paddingLeft:15}}>
           <Image
           style={{width:15,height:15}}
           source={require('./Assets/green.png')}/>
           <TouchableOpacity onPress={()=>navigation.navigate("Homese")}>
           <TextInput
           placeholderTextColor="black"
           style={{width:"70%",marginLeft:10,fontSize:16,color:"black"}}
            placeholder='Your Current Location'
           />
           </TouchableOpacity> 
           <Image 
           style={{width:25,height:25}}
           source={require('./Assets/heart.png')}/>
        </View>
        </TouchableOpacity> 

        <View style={{backgroundColor:"white",width:45,height:45,borderRadius:100,elevation:8,flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute" ,top:30,marginLeft:22}}>
        <TouchableOpacity
        // style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}
        onPress={toggleMenu}
      >
        <Text style={{ color: 'black', fontSize: 24,fontWeight:"bold" }}>☰</Text>
      </TouchableOpacity>
        </View>
      </View>


      <Animated.ScrollView style={{ position: 'absolute', left: menuTranslateX, top: 0, width: 250, height: '100%', backgroundColor: 'white' ,zIndex:5,elevation:5}}>
        <TouchableOpacity style={{ marginLeft:220,top:10 }} onPress={toggleMenu}>
        <Image style={{width:25,height:25}}
               source={require('./Assets/cancel.png')}/>
        </TouchableOpacity>

        <View style={{ flex: 1 }}>

          <TouchableOpacity>
            <View style={{width:"100%",height:70,flexDirection:"row",
          alignItems:"center",paddingLeft:23,borderBottomWidth:1,borderColor:"lightgray"}}>
               <Image style={{width:50,height:50}}
               source={require('./Assets/user.png')}/>
               <View style={{width:'100%',height:50,paddingLeft:20,justifyContent:"space-evenly"}}>
               <Text style={{fontSize:14,color:"black"}}>{name}</Text>
               <Text style={{fontSize:14,color:"black"}}>+91 {mobileNumber}</Text>
               </View>
               
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",justifyContent:"space-around"}}>
               <View style={{flexDirection:"row"}}>
               <Image style={{width:16,height:16}}
               source={require('./Assets/star.png')}/>
                <Text>5</Text>
               </View>

               <Text style={{fontSize:14,fontWeight:"600"}}>My Rating</Text>
               <Image style={{width:16,height:16}}
               source={require('./Assets/right.png')}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>navigation.navigate('Comprofile')}
          >
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",backgroundColor:"rgb(245,245,245)",justifyContent:"space-around"}}>

               <Text style={{fontSize:14,color:"gray",fontWeight:"bold"}}>Complete your profile</Text>
               <Image style={{width:16,height:16}}
               source={require('./Assets/right-1.png')}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",justifyContent:"space-around",}}>
            <LinearGradient
            style={{width:"100%",flexDirection:"row",justifyContent:"space-evenly",height:40,alignItems:"center"}}
              colors={['yellow','white']}
              start={{ x: 0, y: 0.5 }}
               end={{ x: 1, y: 0.5 }}
             >

               <Text style={{fontSize:14,color:"gray",fontWeight:"bold"}}>Upgrade the app</Text>
                
               <Image style={{width:30,height:30}}
               source={require('./Assets/new.png')}/>

               <Image style={{width:16,height:16}}
               source={require('./Assets/right-1.png')}/>
 
             </LinearGradient>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>navigation.navigate('Payment')}
          >
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"blue",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/card.png')}/>
               </View>

               <Text style={{fontSize:14,fontWeight:"600"}}>Payment</Text>
               
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=> navigation.navigate('Myridemain')}
          >
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"gray",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/myride.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>My Rides</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=> navigation.navigate('Safety')}
          >
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:30,height:30}}
               source={require('./Assets/safty.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>Safety</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"red",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/gift.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>Refer and Earn</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"orange",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/trophy.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>My Rewards </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"rgb(248, 248, 14)",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/coin.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>Rapido coin</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"rgb(108, 92, 255)",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/pass.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>Power Pass</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"rgb(255, 11, 174)",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/notification.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>Notifications</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"rgb(0, 194, 19)",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/heart2.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>Claims</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"rgb(66, 60, 246)",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/settings.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>Settings</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity >
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",paddingLeft:15,gap:25}}>
               <View style={{width:30,height:30,borderRadius:100,backgroundColor:"rgb(246, 128, 60)",alignItems:"center",justifyContent:"center"}}>
               <Image style={{width:20,height:20}}
               source={require('./Assets/support.png')}/>
               </View>
               <Text style={{fontSize:14,fontWeight:"600"}}>Support</Text>
            </View>
          </TouchableOpacity>




          

          <TouchableOpacity >
            <View style={{width:"100%",height:50,flexDirection:"row",
          alignItems:"center",justifyContent:"space-around",gap:25,borderTopWidth:1,borderTopColor:"gray",backgroundColor:"rgb(245,245,245)"}}>
               <View style={{width:"70%",height:50,borderRadius:100,alignItems:"center"}}>
               <Text style={{fontSize:14,fontWeight:"600",color:"black"}}>Make more money!</Text>
               <Text style={{fontSize:14,fontWeight:"600",color:"gray"}}>Become a Captain</Text>

               </View>
               <Image style={{width:16,height:16}}
               source={require('./Assets/right.png')}/>
            </View>
          </TouchableOpacity>
          


        </View>

      
      </Animated.ScrollView>

      {/* <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: overlayOpacity,
          zIndex: 4, // Make sure it's behind the menu
        }}
      /> */}

      <View style={{height:"50%",backgroundColor:"white",borderRadius:17,elevation:10,paddingLeft:20,paddingTop:19}}>
        <View style={{backgroundColor:"rgb(240,240,240)",width:"90%",height:50,borderRadius:100,elevation:8,flexDirection:"row",alignItems:"center",paddingLeft:15}}>
           <Image 
           style={{width:10,height:10}}
           source={require('./Assets/reddot.png')}/>
           <TextInput
           placeholderTextColor="gray"
           style={{width:"100%",marginLeft:10,fontSize:17}}
            placeholder='Enter Drop Location'
           />
        </View>
        <Text style={{color:"gray",marginTop:10,fontSize:17,fontWeight:"bold"}}>Drop suggestions</Text>
        
      </View>
     
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})