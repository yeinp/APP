import { getStorage,  ref, getDownloadURL } from "firebase/storage";
import {useState, useEffect} from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image , ScrollView, TouchableOpacity, RefreshControl, StatusBar } from 'react-native';
import { ref as ref2, set, update, onValue, remove,  push, } from "firebase/database";
import { db } from './config';
import { useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'


import puzzle from './assets/home/puzzle.png';
import Toeic from './assets/home/토익1.jpg'
import handCream from './assets/home/핸드크림.jpg'
import jordy from './assets/home/죠르디1.jpeg'
import postit from './assets/home/포스트잇.jpg'
import moodlight from './assets/home/무드등1.jpg'
import nike from './assets/home/나이키모자1.jpg'
import cleaner from './assets/home/미니무선청소기.jpg'
import ipad from './assets/home/아이패드필름1.jpg'
import cleansing from './assets/home/클렌징폼.jpeg'


// Refresh

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}




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

   console.disableYellowBox = true;

// 위치 데이터

   const [location, setLocation] = useState({});
    const [presentLocation, setPresentLocation] = useState('');
    const  locationKeys = Object.keys(location);


    useEffect(() => {
      return onValue(ref2(db, '/location'), querySnapShot => {
        let data3 = querySnapShot.val() || {};
        let locationItems = {...data3};
         setLocation(locationItems);
      });
    }, []);

 // Refresh

 const [refreshing, setRefreshing] = React.useState(false);

 const onRefresh = React.useCallback(() => {
   setRefreshing(true);
   wait(2000).then(() => setRefreshing(false));
 }, []);
  

    return (


  <View style={{flex:1,backgroundColor:'#fff'}}>

    <ScrollView style={{flex:1,backgroundColor:"white"}}
        refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }>

        <View style={{ flexDirection: 'row' , marginTop: -5}}>
              <View style={{ flexDirection: 'column', marginLeft: 35, marginTop: 25, }}>
                   <Image source={puzzle} style={{ height: 33, width: 32, marginLeft: 0 }} />
                   <Text style={{ fontWeight: '900', fontSize: 11, marginTop: 2, marginLeft:-5, color:'green' }}>PUZZLE</Text>
              </View>

              <View>
                 <LinearGradient
                   colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#9ae3d2']}
                   start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                   style={{ height: 15, width: 300, borderRadius: 25, marginLeft: 12, marginTop: 35, opacity:0.2 }}>
                 </LinearGradient>

                <LinearGradient
                   colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#a7e7c0']}
                  start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                  style={{ height: 15, width: 270, borderRadius: 25, marginLeft: 12, marginTop: -15, }}>
                 </LinearGradient>

               <Text style={{marginLeft:230, marginTop:4.5, fontSize:12, fontWeight:'600', color:'#2ea76e'}}>다음 레벨까지 5조각</Text>
               </View>
          </View>


      {ready ? 
      (<Text> </Text>) : 
      (
      <TouchableOpacity style={{flexDirection:'column'}} onPress={() => navigation.navigate('HomeDetailScreen0')} activeOpacity={0.6}>
        <Image source={{ uri: url }} style={{height: 375, width: 375, marginLeft:20, borderRadius:10, marginTop:25,}} />
        <View style={{flexDirection:'column'}}>
           <View>
                  {todosKeys.length > 0 ? (todosKeys.map(key => (<ToDoItem key={key} id={key} todoItem={todos[key]}/>))
                  ) : (
                    <Text>No todo item</Text>
                )}
           </View>


          <Text style={{fontSize:16, marginTop:-5,fontWeight:'500', marginLeft:21,}}>돈암동</Text>
          <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500', marginLeft:21, marginBottom:15}}>하이</Text>
        </View>
    </TouchableOpacity>
     )}


    <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>


    <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen1')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.8}>
       <View style={{flex:0.399}}>
         <Image source={Toeic} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>토익 단어 책 나눔합니다!</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>동선동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>쿨나눔해요</Text>
       </View>
     </TouchableOpacity> 

     <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>




     <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen2')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.8}>
       <View style={{flex:0.399}}>
         <Image source={jordy} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>죠르디 대형 인형</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>길음동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>성여입직거래</Text>
       </View>
     </TouchableOpacity>

    <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>
 


      <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen3')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={postit} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>성신여대 굿즈(포스트잇) 나눔</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>보문동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>나눔조아</Text>
       </View>
     </TouchableOpacity> 

     <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>





      <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen4')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={moodlight} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>무드등 나눔해요</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>보문동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>닝냥뇽</Text>
       </View>
     </TouchableOpacity> 

     <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>



      <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen5')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={ipad} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>아이패드 필름 나눔해요!</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>삼선동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>퍼즐퍼즐</Text>
       </View>
     </TouchableOpacity> 


      <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>



      <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen6')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={cleansing} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>클렌징폼</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>동선동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>무나하는사람</Text>
       </View>
     </TouchableOpacity> 

      <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>

      

      <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen7')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={nike} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>나이키 모자 필요하신분 가져가세요</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>돈암동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>쿨나눔해요</Text>
       </View>
     </TouchableOpacity> 

      <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>



      <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen8')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={cleaner} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>무선청소기 가져가세요~!</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>돈암동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>우나나나나</Text>
       </View>
     </TouchableOpacity> 

      <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>




      <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen9')} style={{flexDirection:'column', marginTop:25,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={handCream} style={{height: 375, width: 375,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79, marginLeft:20, marginTop:10,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>Aesop 핸드크림 나눔합니다</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>보문동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>쿨나눔해요</Text>
       </View>
     </TouchableOpacity> 

      <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>



   </ScrollView>

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

    const LocationItem = ({LocationItem: {title, done}, id}) => {
      const [doneState3, setDone3] = useState(done);
      return (
         <View style={styles.DetailItem}>
          <Text style={[styles.DetailText, {opacity: doneState3 ? 0.2 : 1}]}>
            {title}
          </Text>
        </View>
      );
     }


  
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  },
  todoText: {
    fontSize:18, 
    marginTop:10, 
    fontWeight:'700',
    marginLeft:21,
  },
  DetailItem: {
   flexDirection: 'row',
   marginVertical: 10,
   alignItems: 'center'
 },

  DetailText: {
   paddingHorizontal: 5,
   fontSize: 16,
 },

});
 