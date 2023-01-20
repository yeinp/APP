import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'


import share from './assets/mypage/list.png';
import shopping from './assets/mypage/shopping.png';
import { ScrollView } from 'react-native-gesture-handler';



export default class SettingsScreen extends Component{
    render(){

        const { navigate } = this.props.navigation;

    return (
    
            <View style={styles.container}>

            <View style={styles.fst}>
               <View style={{flexDirection:'row',marginTop:3}}>
               <Ionicons name="person-circle-outline" size={63} color="#424242" style={{marginTop:20, marginLeft:10}} />
               <View style={{backgroundColor:'#ffffff',flex:1, marginTop:30,marginBottom:17,borderRadius:7,}}>
                 <Text style={{fontSize:21, backgroundColor: '#ffffff', marginLeft:13, margin:5, fontWeight:'600'}}>하이</Text>
                 <Text style={{fontWeight:'600',fontSize:14,marginTop:2,color:'gray',marginLeft:13,marginTop:2,}}>돈암동</Text>
               </View>
               </View>
            </View>

          <View style={{height:1,backgroundColor:'#F2F2F2',marginLeft:30, marginRight:30, marginTop:10,}}></View>


          <View style={styles.scd}>

          <View style={{flexDirection:'row',marginTop:28}}>
          <TouchableOpacity  onPress={()=>navigate('ShareScreen')} style={{backgroundColor:'#F2F2F2',borderRadius:50, width:75,height:75, marginLeft:90, }}>
               <Image source={share} style={{height: 35, width: 32, marginLeft:22, marginTop:20,}}/>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=>navigate('BuyScreen')} style={{backgroundColor:'#F2F2F2',borderRadius:50, width:75,height:75, marginLeft:80, }}>
               <Image source={shopping} style={{height: 35, width: 32, marginLeft:22, marginTop:20,}}/>
          </TouchableOpacity>

          </View>


          <View style={{flexDirection:'row',marginTop:7, marginLeft:105}}>
            <Text style={{fontWeight:'500',fontSize:14,}}>나눔 내역</Text>
            <Text style={{fontWeight:'500',fontSize:14, marginLeft:110,}}>구매 내역</Text>
          </View>

        </View>


        <ScrollView style={{marginTop:40,}}>

        <View style={styles.thrd}>
          <Text style={{fontSize:22,marginLeft:30,marginTop:0, fontWeight:'800'}}>현재까지 모은 퍼즐</Text>
          <Text style={{fontSize:47,marginLeft:30,marginTop:0, fontWeight:'100'}}>95 Piece</Text>
          <Text style={{fontSize:21,marginLeft:30,marginTop:0, fontWeight:'200'}}>U등급</Text>


          <View style={{flexDirection:'row'}}>

          <View style={{}}>
           <Text style={{fontSize:12, marginLeft:42 , marginTop:75, fontWeight:'500', color:'#2ea76e', opacity:0.4}}>0-49</Text>
           <LinearGradient
             colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#9ae3d2']}
             start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
             style={{ height: 70, width: 16, borderRadius: 25, marginLeft: 47, marginTop: 5, opacity: 0.4,}}>
            </LinearGradient>
            <Text style={{marginLeft:51 , marginTop: 6, fontWeight:'500', color:'#2ea76e', opacity: 0.4}}>P</Text>
          </View>

          <View style={{}}>
           <Text style={{fontSize:12, marginLeft:45 , marginTop:55, fontWeight:'500', color:'#2ea76e', opacity: 1}}>50-99</Text>
           <LinearGradient
             colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#9ae3d2']}
             start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
             style={{ height: 90, width: 16, borderRadius: 25, marginLeft: 53, marginTop: 5, opacity: 1,}}>
            </LinearGradient>
            <Text style={{marginLeft:56.5 , marginTop: 6, fontWeight:'500', color:'#2ea76e', opacity: 1}}>U</Text>
          </View>

          <View style={{}}>
            <Text style={{fontSize:12, marginLeft:40 , marginTop:35, fontWeight:'500', color:'#2ea76e', opacity: 0.4}}>100-149</Text>
            <LinearGradient
              colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#9ae3d2']}
              start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
              style={{ height: 110, width: 16, borderRadius: 25, marginLeft: 53, marginTop: 5, opacity: 0.4,}}>
            </LinearGradient>
            <Text style={{marginLeft:56.5 , marginTop: 6, fontWeight:'500', color:'#2ea76e', opacity: 0.4}}>Z</Text>
          </View>


          <View style={{}}>
            <Text style={{fontSize:12, marginLeft:39 , marginTop:15, fontWeight:'500', color:'#2ea76e', opacity: 0.4}}>150-199</Text>
           <LinearGradient
              colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#9ae3d2']}
              start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
              style={{ height: 130, width: 16, borderRadius: 25, marginLeft: 52, marginTop: 5, opacity: 0.4,}}>
            </LinearGradient>
            <Text style={{marginLeft:55.5 , marginTop: 6, fontWeight:'500', color:'#2ea76e', opacity: 0.4}}>L</Text>
          </View>


          <View style={{}}>
           <Text style={{fontSize:12, marginLeft:41 , marginTop:-5, fontWeight:'500', color:'#2ea76e', opacity: 0.4}}>200-</Text>
           <LinearGradient
              colors={['#deefc6', '#d8eab4', '#cbecbb', '#b9ecbc', '#a7e7c0', '#9ae3d2']}
             start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
             style={{ height: 150, width: 16, borderRadius: 25, marginLeft: 49, marginTop: 5, opacity: 0.5,}}>
           </LinearGradient>
            <Text style={{marginLeft:52.5 , marginTop: 6, fontWeight:'500', color:'#2ea76e', opacity: 0.4}}>E</Text>
          </View>


          </View>

        <View style={{ alignItems:'flex-start',}}>
          <Text style={{fontSize:22,marginHorizontal:30,marginTop:40, fontWeight:'800',}}>현재까지 기부금액</Text>
          <Text style={{fontSize:47,marginHorizontal:30,marginTop:0, fontWeight:'100',}}>9,500won</Text>
        </View>



        </View>

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
      flex:1.8,
      backgroundColor:'white',
      paddingHorizontal:10,
    },
    scd:{
      flex:2.4,
    },
    thrd:{
      flex:0.8,
    }
  });