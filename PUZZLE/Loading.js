import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import { Plane, Flow, Chase, CircleFade, Swing } from 'react-native-animated-spinkit'
import { Ionicons } from '@expo/vector-icons'; 

import puzzle from './assets/location/puzzle.png'

export default function Loading(){
    return(
        <>
        
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={30} color="#a0dd83" style={{marginBottom:38}}/>
      <Text style={{fontSize:33, marginTop:0, fontWeight:'800'}}>위치 설정 중</Text>

      <Text style={{fontSize:20, marginTop:38, fontWeight:'600', color:'#A4A4A4'}}>하이님, 안녕하세요!</Text>
      <Text style={{fontSize:20, marginTop:2, fontWeight:'600', color:'#A4A4A4'}}>퍼즐에 오신걸 환영해요.</Text>
      <Text style={{fontSize:20, marginTop:2, fontWeight:'600', color:'#A4A4A4'}}>잠시만 기다려주세요.</Text>

      <Flow size={60} color="#c2e9af" style={{marginTop:47, marginBottom:75,}} /> 
      </View>
  </>)
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
})