import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import m1955 from './assets/mypage/맥도날드1955.png';
import Toeic from './assets/home/토익1.jpg'
import jordy from './assets/home/죠르디1.jpeg'
import feed from './assets/mypage/강아지사료1.jpg';
import python from './assets/mypage/두근두근파이썬1.jpg';



export default function App() {
  return (
    <View style={styles.container}>

    <View style={{flex:0.0002,backgroundColor:'grey'}}>
    </View>


    <ScrollView style={styles.thrd}>


    <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen1')} style={{flexDirection:'row', marginTop:30,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={feed} style={{height: 100, width: 100,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79,}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>강아지 사료 나눔합니다</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>돈암동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>하이</Text>
       </View>
     </TouchableOpacity> 

     <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>






     <TouchableOpacity onPress={() => navigation.navigate('HomeDetailScreen2')} style={{flexDirection:'row', marginTop:25,marginBottom:15}} activeOpacity={0.6}>
       <View style={{flex:0.399}}>
         <Image source={python} style={{height: 100, width: 100,marginLeft:20,borderRadius:10}}/>
       </View>
       <View style={{flexDirection:"column", flex:0.79}}>
         <Text style={{fontSize:18, marginTop:8,fontWeight:'700',}}>두근두근 파이썬</Text>
         <Text style={{fontSize:16, marginTop:2,fontWeight:'500',}}>돈암동</Text>
         <Text style={{fontSize:14, marginTop:10,color:'grey',fontWeight:'500',}}>하이</Text>
       </View>
     </TouchableOpacity>

    <View style={{flex:0.0000001,backgroundColor:'#F2F2F2',marginTop:7,}}>
       <Text style={{fontSize:1,}}> </Text>
      </View>


      


    </ScrollView>

    <View style={styles.four}>
    </View>


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
  fst:{
    flex:0.16,
  },
  secnd:{
    flex:0.11,
    backgroundColor:'white'
  },
  thrd:{
    flex:1.1,
  },
  four:{
    flex:0.18,
    backgroundColor:'white'
  }
});
