import React, {Component,useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Image,TextInput,
  KeyboardAvoidingView,TouchableOpacity,StatusBar,ScrollView, NativeModules } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import jordy from './assets/home/죠르디1.jpeg'

let pencilcase = require('./assets/home/search.png');
import Toeic from './assets/home/토익1.jpg'




 export default function App() {
    
  const { StatusBarManager } = NativeModules

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [text,setText]= useState();
  const [bubble,setBubble]= useState({});
  const onChangeText = (playload) => setText(playload);

  const SendMessage = () => {
    if(text === ""){
    return;
    }
    const newMessage = Object.assign({}, bubble, {
    [Date.now()]: {text},
    });
    setBubble(newMessage);
    setText(" ");
    };
    
    
    return (
      <View style={styles.container}>
  
      <View style={styles.detail}>
      <View style={{flexDirection:'row',marginLeft:2, marginTop:15}}>
         <Image source={Toeic} style={{height: 65, width: 65,marginLeft:15,borderRadius:10}}/>
         <View style={{flexDirection:'column', marginLeft:15, marginTop:12,}}>
            <Text style={{fontWeight:'700',fontSize:16, marginTop:1}}>토익 단어 책 나눔합니다!</Text>
            <Text style={{fontWeight:'500',fontSize:13, marginTop:3, color:'#585858'}}>쿨나눔해요</Text>
         </View>
      </View> 
      </View>
      <View style={{backgroundColor:'#F2F2F2',height:1, marginTop:-5, marginBottom:20,}}></View>



        <ScrollView  style={styles.content}>

          <View style={styles.elem2}>
          {Object.keys(bubble).map((key) => (
          <View style={styles.userComment} key={key}>
          <Text style={styles.Text}>{bubble[key].text}</Text>
          </View>
          ))}
          </View>

        </ScrollView>


        <KeyboardAvoidingView
        behavior={"padding"}
        keyboardVerticalOffset={statusBarHeight+100}
        style={styles.send}
        >

       <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:15, marginLeft:20,marginTop:67, color:"black"}} />
       <View>
      <TextInput
       onSubmitEditing={SendMessage}
       onChangeText={onChangeText}
       returnKeyType="done"
       value={text}
       placeholder={'채팅을 시작해 보세요'} style={styles.input}></TextInput>
      </View>

      <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={SendMessage}>
        <View style={styles.box}>
           <Text style={{marginTop:3,marginLeft:1,fontWeight:'500'}}>전송</Text>
        </View>
      </TouchableOpacity>
       </View>
      </KeyboardAvoidingView>

        
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header:{
    height:93,
    },
  
  content: {
    flex:1,
    backgroundColor:'white',
  },

  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
  },

  elem2: {
    width: '100%',
    flexDirection: 'Column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding:3,
    marginTop:-3,
    
  },
  box: {
    alignItems:'center',
    justifyContent:'center'        
  },
  userComment: {
    padding:10,
    backgroundColor:'#078C74',
    borderRadius:25,
    marginRight:12,
    height :35,
    marginTop:5,
    justifyContent:'center',
    alignItems:'center',

  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
  },

  btn:{
    height :28,
    backgroundColor:"#D2D2D2",
    paddingHorizontal:17,
    paddingVertical:5,
    marginLeft:13,
    width:60,
    borderRadius:12,
    marginTop:8,
    marginBottom:38,
    },

    input:{
      paddingHorizontal:10,
      backgroundColor:'#ffffff',
      width:310,
      fontSize:15,
      paddingVertical:7,
      borderRadius:12,
      marginBottom:9,
      borderColor:"#D2D2D2",
      borderWidth:0.3,
      marginTop:8,
      },
      send:{
        flex:0.13,
        backgroundColor:'#f8f9fa',
        marginTop:2,
        },

    detail:{
    height:100,
    backgroundColor:'white'
          },

    Text: {
      color: "#ffffff",
      fontSize: 17,
      fontWeight:'200',
      color:'#ffffff',
      marginHorizontal:6,
      fontWeight:'400'
      },
            
          
        
      
  
});