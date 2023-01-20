import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default class DetailScreen extends Component {

  state={
    textInputValue:null
  }

  render() {

    return (
      <View style={styles.container}>

        
    <View style={styles.header}>
      <Text style={{fontWeight:'900',fontSize:45, color:"#82d998",marginTop:255,}}>Puzzle</Text>
      </View>

      <View style={styles.detail}>
      <Text style={{fontWeight:'800',fontSize:14, color:"lightgrey",}}>
      너와 나, 우리의 조각이 모여 완성되는
      </Text> 
      <Text style={{fontWeight:'800',fontSize:14, color:"lightgrey",}}>                   
       #Zero-waste #지속 가능성 #나눔의 기쁨
      </Text>
      </View>

      <View style={styles.one}>
          <TextInput placeholder={'닉네임을 입력하세요'} 
          style={styles.input} 
          onChangeText={(value) => this.setState({textInputValue: value})}/>
        </View>
      
        <StatusBar style="auto" />

        <TouchableOpacity onPress={() => this.goLocationScreen()} activeOpacity={0.6}>
           <LinearGradient
             colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#9ae3d2']}
             start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
             style={{ height: 47, width: 300, borderRadius: 25, marginLeft: 12, marginTop: 10, marginBottom:5 }}>
              <Text style={{color:'white', fontSize:22, textAlign:'center', fontWeight:'900', marginTop:14,}}>확인</Text>
           </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  goLocationScreen(){
    this.props.navigation.navigate('location');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:50,

  },
  header: {
    flex:0.42,
    flexDirection:'column',
    alignItems:'center',
    marginTop:15
    },
    detail: {
      backgroundColor:"white",
      flex:0.1,
      flexDirection:'Low',
      alignItems:'center',
      marginTop:0,
    },
  one:{
    backgroundColor:'white',
  },
  input:{
    backgroundColor:'#f5f5f5',
    marginTop:40,
    marginLeft:12,
    width:300,
    height:47,
    fontSize:16,
    fontWeight:'600',
    borderRadius:25,
    textAlign:'center'
  },

  btn:{
    flex:1,
    backgroundColor:"#078C74",
    paddingVertical: 15,
    marginLeft:10,
    width:300,
    borderRadius:15,
    marginTop:10,
   },

  
});