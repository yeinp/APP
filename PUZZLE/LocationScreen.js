import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Location from "expo-location";
import { View, Text, StyleSheet, ScrollView, Dimensions,Button,Alert,Image} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient'

import Loading from './Loading';

import Home from './assets/location/home.png'
import Walk from './assets/location/walk.png'

function App({navigation}) { 

  const [state,setState] = useState([])
  const [ready, setReady] = useState(true)
  const [city, setCity] = useState(" ");
  const [country, setCountry] = useState(" ");
  const [name,setName]=useState("잠시만 기다려주세요");
  const [district,setdistrict]=useState(" ");
  const [region,setRegion]=useState(" ");
  const [location, setLocation] = useState(null);
  const [ok, setOk] = useState(true);

  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }


    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
      ,
    );

    setCity(location[0].city)
    setName(location[0].name)
    setRegion(location[0].region)
    setdistrict(location[0].district)
    setCountry(location[0].country)


    console.log(location)
    
  
    
  };
 
  useEffect(() => {
    ask();
    
  }, []);


  

  useEffect(()=>{
    //뒤의 1000 숫자는 1초를 뜻함     
     //1초 뒤에 실행되는 코드들이 담겨 있는 함수     
     setTimeout(()=>{
                    setReady(false)
            },14000)
            
    },[])

  return(ready ? <Loading/> :(
          <>
    <View style={styles.container}>
        <Ionicons name="location-sharp" size={30} color="#a0dd83" style={{marginTop:65,}}/>
        <Text style={{fontSize:20, marginTop:20, color:'#B1B1B1', fontSize:22, fontWeight:'600'}}>현재 위치는</Text>
        <Text style={{fontSize:30, marginTop:13, fontWeight:'700'}}>{country}</Text>
        <Text style={{fontSize:30, marginTop:13, fontWeight:'700'}}>{city}</Text>
        <Text style={{fontSize:30,marginTop:10, fontWeight:'700'}}>{name}</Text>
        <Text style={{fontSize:20, marginTop:20, color:'#B1B1B1', fontSize:22, fontWeight:'600'}}>입니다</Text>
        

      <TouchableOpacity  onPress={()=>navigation.navigate("main")} activeOpacity={0.6}>
           <LinearGradient
             colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#9ae3d2']}
             start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
             style={{ height: 47, width: 285, borderRadius: 25, marginTop: 105, marginBottom:5 }}>
              <Text style={{color:'white', fontSize:22, textAlign:'center', fontWeight:'900', marginTop:14,}}>확인</Text>
           </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={{width:285,height:47, backgroundColor:'white', borderRadius:50, marginTop:0}}>
        <Text style={{textAlign:'center', marginTop:14, color:'#82d998', fontSize:22, fontWeight:'900'}}>재설정</Text>
      </TouchableOpacity>

      
    </View>
    </>)
        
  )

}export default App;

const styles=StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
      marginTop:0,
  },
})