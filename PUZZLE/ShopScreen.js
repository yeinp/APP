
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient'

import m1955 from './assets/shop/cafe/맥도날드1955.png';
import puzzle from './assets/shop/icon/puzzle.png';
import cafe from './assets/shop/icon/cafe1.png';
import fast from './assets/shop/icon/burger.png';
import beauty from './assets/shop/icon/beauty1.png';
import convi from './assets/shop/icon/convi1.png';
import cloth from './assets/shop/icon/cloth1.png';
import acc from './assets/shop/icon/acc1.png';
import chicken from './assets/shop/icon/chicken.png';
import bread from './assets/shop/icon/bread.png';
import { SliderBox } from "react-native-image-slider-box";

import H5 from './assets/shop/cafe/복숭아얼그레이_할리스.png';
import H6 from './assets/shop/cafe/바닐라딜라이트_할리스.png';
import H7 from './assets/shop/cafe/딸기치즈케익할리치노_할리스.png';
import C1 from './assets/shop/conve/3XL뉴리치참치마요.jpg';
import C4 from './assets/shop/conve/반숙에그샌드.jpg';
import C17 from './assets/shop/conve/확실한불고기김밥.jpg';





export default class ShopScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./assets/shop/cafe/복숭아얼그레이_할리스.png'),
        require('./assets/shop/cafe/바닐라딜라이트_할리스.png'),
      ]
    };
  }

  render() {

    const { navigate } = this.props.navigation;

    return (

        <><View style={styles.container}>

            <View style={styles.secnd}>
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
            </View>

            <View style={styles.thrd}>

                <View style={{ flexDirection: 'row', marginLeft: 29, marginTop:-15, }}>
                  <TouchableOpacity style={{backgroundColor:'#F2F2F2',borderRadius:30, width:70,height:70,}} onPress={() => navigate('CafeScreen')}>
                    <Image source={cafe} style={{ height: 50, width: 50, marginLeft:11, marginTop:8,}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#F2F2F2',borderRadius:30, width:70,height:70, marginLeft:25,}} onPress={() => navigate('FastfoodScreen')}>
                    <Image source={fast} style={{ height: 49, width: 49, marginLeft: 11, marginTop:9 }} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#F2F2F2',borderRadius:30, width:70,height:70, marginLeft:25,}} onPress={() => navigate('ChickenScreen')}>
                   <Image source={chicken} style={{ height: 47, width: 47, marginLeft: 11, marginTop:11 }} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#F2F2F2',borderRadius:30, width:70,height:70, marginLeft:25,}} onPress={() => navigate('BakeryScreen')}>
                   <Image source={bread} style={{ height: 48, width: 48, marginLeft: 13, marginTop:12 }} />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 44, marginTop: 5, }}>
                    <Text style={{ fontWeight: '500', fontSize: 14, }}>   카페</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, }}>                  패스트푸드</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, }}>                  치킨</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, }}>                   베이커리</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 29, marginTop: 15, }}>
                <TouchableOpacity style={{backgroundColor:'#F2F2F2',borderRadius:30, width:70,height:70,}} onPress={() => navigate('ConveScreen')}>
                    <Image source={convi} style={{ height: 50, width: 50, marginLeft:11, marginTop:7,}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#F2F2F2',borderRadius:30, width:70,height:70, marginLeft:25,}} onPress={() => navigate('ClothScreen')}>
                    <Image source={cloth} style={{ height: 49, width: 49, marginLeft: 11, marginTop:9 }} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#F2F2F2',borderRadius:30, width:70,height:70, marginLeft:25,}} onPress={() => navigate('BeautyScreen')}>
                   <Image source={beauty} style={{ height: 49, width: 49, marginLeft: 11, marginTop:9 }} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#F2F2F2',borderRadius:30, width:70,height:70, marginLeft:25,}} onPress={() => navigate('AccScreen')}>
                   <Image source={acc} style={{ height: 49, width: 49, marginLeft: 11, marginTop:9 }} />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 44, marginTop: 5, marginBottom:25,}}>
                    <Text style={{ fontWeight: '500', fontSize: 14, }}> 편의점</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, }}>                      의류</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, }}>                      뷰티</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, }}>                    악세사리</Text>
                </View>

                <ScrollView>
                  <Text style={{fontSize:22,marginLeft:30,marginTop:20, fontWeight:'700'}}>뜨고있는 상품</Text>

                  
                     <View style={{flexDirection:'row'}}>
                     <Image source={H5} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
                      <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
                       <Text style={{fontSize:18,fontWeight:'700'}}>허니 레몬 티</Text>
                        <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
                         <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
                       </View>
                     </View>
                      </View>

                      <View style={{flexDirection:'row'}}>
                     <Image source={H6} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
                      <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
                       <Text style={{fontSize:18,fontWeight:'700'}}>바닐라 딜라이트</Text>
                        <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
                         <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
                       </View>
                     </View>
                      </View>

                      <View style={{flexDirection:'row'}}>
                     <Image source={H7} style={{height: 95, width: 95,marginLeft:20,marginTop:12,}}/>
                      <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
                       <Text style={{fontSize:18,fontWeight:'700'}}>딸기 치즈케익 할리치노</Text>
                        <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
                         <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
                       </View>
                     </View>
                      </View>

                      <View style={{flexDirection:'row'}}>
                     <Image source={C1} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
                      <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
                       <Text style={{fontSize:18,fontWeight:'700'}}>3XL뉴리치참치마요</Text>
                        <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
                         <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
                       </View>
                     </View>
                      </View>


                      <View style={{flexDirection:'row'}}>
                     <Image source={C4} style={{height: 95, width: 95,marginLeft:20,marginTop:12,}}/>
                      <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
                       <Text style={{fontSize:18,fontWeight:'700'}}>반숙에그샌드</Text>
                        <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
                         <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
                       </View>
                     </View>
                      </View>

                      <View style={{flexDirection:'row'}}>
                     <Image source={C17} style={{height: 95, width: 95,marginLeft:20,marginTop:12,}}/>
                      <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
                       <Text style={{fontSize:18,fontWeight:'700'}}>확실한불고기김밥</Text>
                        <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
                         <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
                       </View>
                     </View>
                      </View>

                </ScrollView>
            </View>
        </View></>
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
      flex:0.18,
    },
    secnd:{
      flex:0.2,
      backgroundColor:'white'
    },
    thrd:{
      flex:1,
    },
    four:{
      flex:0.18,
      backgroundColor:'white'
    },

    buttonText: {
      textAlign: 'center',
      color: '#4C64FF',
      padding: 15,
      marginLeft: 1,
      marginRight: 1,
      width: 198
}
    
  });