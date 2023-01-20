import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, LogBox } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { ref as ref2, set, update, onValue, remove,  push, } from "firebase/database";
import { db } from './config';
import { useIsFocused } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import { getStorage,  ref, getDownloadURL } from "firebase/storage";

import Toeic from './assets/home/토익1.jpg'
import puzzle from './assets/home/puzzle.png';
import handCream from './assets/home/핸드크림.jpg'
import jordy from './assets/home/죠르디1.jpeg'
import postit from './assets/home/포스트잇.jpg'
import moodlight from './assets/home/무드등1.jpg'
import nike from './assets/home/나이키모자1.jpg'
import cleaner from './assets/home/미니무선청소기.jpg'
import ipad from './assets/home/아이패드필름1.jpg'
import cleansing from './assets/home/클렌징폼.jpeg'
import feed from './assets/mypage/강아지사료1.jpg';
import python from './assets/mypage/두근두근파이썬1.jpg';



LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
  ])

import kakao from './assets/home/카카오필통.jpg';


export default function App({navigation}) {



  const [url, setUrl] = useState();
    const [ready, setReady]=useState(true);


    useEffect(() => {
      const func = async () => {
        const storage = getStorage();
        const reference = ref(storage, 'photo.jpg');
        await getDownloadURL(reference).then((x) => {
          setUrl(x);
          setReady(false);
        })
      }
  
      if (url == undefined) {func()
        setReady(true);
      };
    }, []);


    //Text

    const [todos, setTodos] = useState({});
    const [presentTodo, setPresentTodo] = useState('');
    const todosKeys = Object.keys(todos);

    const [detail, setDetail] = useState({});
    const [presentDetail, setPresentDetail] = useState('');
    const  detailKeys = Object.keys(detail);


    useEffect(() => {
      return onValue(ref2(db, '/todos'), querySnapShot => {
        let data = querySnapShot.val() || {};
        let todoItems = {...data};
        setTodos(todoItems);
      });
    }, []);
   
    useEffect(() => {
     return onValue(ref2(db, '/detail'), querySnapShot => {
       let data2 = querySnapShot.val() || {};
       let detailItems = {...data2};
       setDetail(detailItems);
     });
   }, []);

 

   const isFocused = useIsFocused();
    

   useEffect(() => {
     if (isFocused) console.log('Focused!!');
   },[isFocused]);


    return (
    <View style={styles.container}>



    <ScrollView style={styles.thrd}>

      
    <View>
       <Image source={{ uri: url }} style={{height: 450, width: 450,}}/>
      </View>


      <View style={{marginLeft:20,marginTop:25,}}>
          {todosKeys.length > 0 ? (todosKeys.map(key => (<ToDoItem key={key} id={key} todoItem={todos[key]}/>))
          ) : (<Text>No todo item</Text>)}
        <Text style={{fontSize:17,marginTop:0,color:'grey',fontWeight:'500'}}>돈암동 · 1분 전</Text>

      </View>


      <View style={{marginLeft:20,marginTop:35,}}>
             {detailKeys.length > 0 ? (detailKeys.map(key => (<DetailItem key={key} id={key} DetailItem={detail[key]}/>))
          ) : (<Text>No detail item</Text>)}
      </View>


      <View>


        <View style={{backgroundColor:'#F2F2F2',marginTop:70, height:1.3,marginLeft:15, marginRight:15, marginBottom:5,}}></View>

        <View style={{flexDirection:'row'}}>
         <Ionicons name="person-circle-outline" size={45} color="grey" style={{marginTop:15, marginLeft:20}} />
         <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:22, marginLeft:10, fontSize:17, fontWeight:'800'}}>
            하이
          </Text>
          <Text style={{marginTop:5, marginLeft:10, fontSize:14,}}>
            #돈암동 #U등급
          </Text>
         </View>
        </View>

        <View style={{backgroundColor:'#F2F2F2',marginTop:20, height:1.3,marginLeft:15, marginRight:15,}}></View>

        <Text style={{marginTop:50, marginLeft:20, fontSize:21, fontWeight:'600'}}>
          #하이님의 다른 게시물
        </Text>

        <View style={{flexDirection:'row',marginTop:20, marginBottom:30,}}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen1')} activeOpacity={0.5}>
            <Image source={feed} style={{height: 175, width:175, marginBottom:20,marginLeft:20,borderRadius:10,}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen1')} activeOpacity={0.5}>
            <Image source={python} style={{height: 175, width:175, marginBottom:20,marginLeft:20,borderRadius:10,}}/>
          </TouchableOpacity>      
        </View>


      </View>

    </ScrollView>

    

    <View style={styles.four}>
      <View style={{marginLeft:26,marginTop:10,color:'grey',flexDirection:'row'}}>
       <Feather name="heart" size={37} color="#078C74" style={{marginTop:5,}}/>      
         <TouchableOpacity style={{backgroundColor:'#078C74',flex:0.91,marginLeft:23, borderRadius:10,marginBottom:-5}}>
           <Text style={{fontSize:22,fontWeight:'600',marginLeft:115, color:'white',marginTop:13,}}>채팅하기</Text>
         </TouchableOpacity>
      </View>
    </View>



    </View>
  );
}




const ToDoItem = ({todoItem: {title, done}, id}) => {
  const [doneState, setDone] = useState(done);
 
  return (
    <View style={styles.todoItem}>
      <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
        {title}
      </Text>
    </View>
  );
  }
 
  const DetailItem = ({DetailItem: {title, done}, id}) => {
   const [doneState2, setDone2] = useState(done);
   return (
      <View style={styles.DetailItem}>
       <Text style={[styles.DetailText, {opacity: doneState2 ? 0.2 : 1}]}>
         {title}
       </Text>
     </View>
   );
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
  Text:{
    fontSize:18,
    fontWeight:'600',
    marginTop:5,
    color:'#2E2E2E'
  },
  fst:{
    flex:0.28,
  },
  secnd:{
    flex:1.4,
    backgroundColor:'white',
  },
  thrd:{
    flex:0.8,
    backgroundColor:'white',
  },

  four:{
    flex:0.12,
    backgroundColor:'white'
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  },
  todoText: {
    fontSize:25,
    fontWeight:'700'
  },
  DetailItem: {
   flexDirection: 'row',
   marginVertical: 10,
   alignItems: 'center'
 },

  DetailText: {
    fontSize:18,
    fontWeight:'600',
    marginTop:5,
    color:'#2E2E2E'
 },
});
