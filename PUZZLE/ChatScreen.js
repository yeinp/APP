import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather, Ionicons } from '@expo/vector-icons'; 

import kakao from './assets/chat/카카오필통.jpg';
import jordy from './assets/home/죠르디1.jpeg'
import Toeic from './assets/home/토익1.jpg'


export default class SettingsScreen extends Component{
    render(){
        const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
  
  
  <ScrollView>
    
        <TouchableOpacity onPress={()=>navigate('ChatDetailScreen')}>
        <View style={{flexDirection:'row'}}>
        <Ionicons name="person-circle-outline" size={45} color="#424242" style={{marginTop:25, marginLeft:20}} />
          <View style={{flexDirection:"column",marginTop:35,marginLeft:13}}>
            <Text style={{fontSize:20,fontWeight:'700'}}>쿨나눔해요</Text>
            <Text style={{fontSize:14,fontWeight:'400',marginTop:2,}}>단어책 나눔 받을 수 있을까요?</Text>
            <View style={{flexDirection:'row'}}></View>
          </View>
          <Image source={Toeic} style={{height:60, width:60,marginLeft:115,marginTop:20, borderRadius:5,}}/>
        </View>
        </TouchableOpacity>
  

        <View style={{height: 1,flex:0.0014,backgroundColor:'#F2F2F2',marginTop:17}}></View>



        
        
  </ScrollView>
        
        </View>
    );
}


 
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    Text:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    fst:{
      flex:0.13,
    },
    secnd:{
      flex:0.15,
    },
    thrd:{
      flex:0.3,
    },
   
  });