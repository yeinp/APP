import { useEffect, useState } from 'react';
import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { firebase } from './config';
import { ref as ref2 , onValue, remove,  push, } from "firebase/database";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image, Button,TextInput,ScrollView,  } from 'react-native'
import { db } from './config';

const UploadScreen = ({navigation}) => {

    const [image, setImage ] = useState(null);
    const [uploading, setUploading] = useState(false);


    const pickImage = async () => {
        // No permissions request is neccessary for launching th image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        });

        const source = {uri: result.uri};
        console.log(source);
        setImage(source);
    };


    const uploadImage = async () => {
        setUploading(true);
        const response = await fetch(image.uri)
        const blob = await response.blob();
        const filename = 'photo.jpg'
        //image.uri.substring(image.uri.lastIndexOf('/')+1);
        var ref = firebase.storage().ref().child(filename).put(blob);
        
        try {
            await ref;
        } catch (e) {
            console.log(e);

        }
        setUploading(false);
        Alert.alert(
            '작성이 완료되었습니다'
        );
        setUploading(true);
        setImage(null);
 


        console.log(filename)
    };


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

    function addNewTodo() {
      push(ref2(db, '/todos'), {
        done: false,
        title: presentDetail,
      });
      setPresentTodo('');
    }

    function addDetail() {
      push(ref2(db, '/detail'), {
        done: false,
        title: presentTodo,
      });
      setPresentDetail('');
    }

    function clearTodos() {
      remove(ref2(db, '/todos'));
    }

    function clearDetails() {
      remove(ref2(db, '/detail'));
    }

    const onPress = () => {
      addNewTodo();
      addDetail();
      
    };

//

    const[district,setDistrict]=useState('')

    const [state,setState] = useState([])
    const [ready, setReady] = useState(true)
    const [city, setCity] = useState(" ");
    const [name,setName]=useState("잠시만 기다려주세요");
    const [region,setRegion]=useState(" ");
    const [street, setStreet] = useState('')
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
      setStreet(location[0].street)
      setDistrict(location[0].district)
      console.log(location)


      useEffect(() => {
        return onValue(ref2(db, '/detail'), querySnapShot => {
          let data3 = querySnapShot.val() || {};
          let locationItems = {...data3};
          setLocation(locationItems);
        });
      }, []);


      function addLocation(){
        push(ref2(db, '/location'), {
          done: false,
          title: street,
        });
      }


      const onPress = () => {
        addNewTodo();
        addDetail();
        addLocation();
        
      };

      
    
      
    };
   



  return (

   <ScrollView contentContainerStyle={styles.contentContainerStyle}>

    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:6, marginTop:33,}}>
        <Text style={{ fontSize:17, fontWeight:'600', marginLeft:160, marginRight:120,}}>나눔 글 작성</Text>
        <Button 
          onPress={()=>{uploadImage();onPress();navigation.navigate("HomeDetailScreen0");}} 
          style={{ fontSize:17, fontWeight:'600', marginLeft:0,}} 
          title='완료'></Button>
    </View>




    <View style={styles.line}/>


     <View style={{flex:0.25,}}>
      <TextInput
       placeholder="글 제목을 입력해주세요"
       value={presentDetail}
       style={styles.textInput}
       onChangeText={text => {
         setPresentDetail(text);
       }}
       onSubmitEditing={addDetail}
     />

    <View style={styles.textInputunder}/>



      <TextInput
       placeholder="제품에 대해 설명해주세요 (구체적일수록 나눔에 도움이 돼요!)"
       value={presentTodo}
       style={styles.textInput}
       multiline={true} 
       onChangeText={text => {
         setPresentTodo(text);
       }}
       onSubmitEditing={addNewTodo}
     />
     </View>



    <SafeAreaView style={{flex:0.5}}>
        <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
            <Feather name="camera" size={30} color="#A4A4A4" />
        </TouchableOpacity>


        <View>
            {image && <Image source={{uri: image.uri}} style={styles.selectImage} />}
        </View>
    </SafeAreaView>


    </ScrollView>
  )
  
}


export default UploadScreen



const styles = StyleSheet.create ({
    selectButton: {
        borderRadius:10,
        marginTop:220,
        width:102,
        height:102,
        borderWidth:1.2,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        borderColor:'#D8D8D8'
    },
    selectImage: {
        width:105,
        height:105,
        borderRadius:10,
        marginTop:-105,
        marginLeft:10,
    },
    uploadButton:{
        marginTop:50,
        borderRadius:5,
        width:150,
        height:50,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
    },
    buttonText:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
    },
    contentContainerStyle: {
      flex:1,
      backgroundColor:'white',
      padding: 22
    },
    textInput: {
      paddingHorizontal: 20,
      marginVertical: 30,
      fontSize: 20,
      fontWeight:'600'
    },
    textInputunder:{
      width:357, 
      height:1.2, 
      backgroundColor:'#F3F3F3',
      marginBottom:5,
      marginTop:-10,
      marginLeft:5,
    },
    line:{
      width:440, 
      height:0.73, 
      backgroundColor:'#E4E4E4',
      marginBottom:5,
      marginTop:0,
      marginLeft:-25,
    },
    todoItem: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center'
    },
    DetailItem: {
     flexDirection: 'row',
     marginVertical: 10,
     alignItems: 'center'
   },
    todoText: {
      paddingHorizontal: 5,
      fontSize: 16
   },
})