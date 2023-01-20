import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button,  FlatList,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from "react";

import m1955 from './assets/shop/cafe/맥도날드1955.png';
import puzzle from './assets/shop/cafe/puzzle.png';
import H1 from './assets/shop/cafe/디카페인아메_할리스.png';
import H2 from './assets/shop/cafe/디카페인카페라떼_할리스.png';
import H3 from './assets/shop/cafe/콜드브루딜라이트_할리스.png';
import H4 from './assets/shop/cafe/유자캐모마일_할리스.png';
import H5 from './assets/shop/cafe/복숭아얼그레이_할리스.png';
import H6 from './assets/shop/cafe/바닐라딜라이트_할리스.png';
import H7 from './assets/shop/cafe/딸기치즈케익할리치노_할리스.png';
import H8 from './assets/shop/cafe/그린티할리치노_할리스.png';
import H9 from './assets/shop/cafe/그린티라떼_할리스.png';
import T1 from './assets/shop/cafe/롱블랙_투썸.png';
import T2 from './assets/shop/cafe/스트로베리피치프라페_투썸.png';
import T3 from './assets/shop/cafe/스페니쉬연유라떼_투썸.png';
import T4 from './assets/shop/cafe/허니레몬티_투썸.png';
import T5 from './assets/shop/cafe/뉴욕치즈케이크_투썸.jpg';
import T6 from './assets/shop/cafe/레드벨벳_투썸.jpg';
import T7 from './assets/shop/cafe/클래식루벤_투썸.jpg';
import T8 from './assets/shop/cafe/그릴드치킨샐러드_투썸.jpg';
import T9 from './assets/shop/cafe/B.E.L.T.샌드위치_투썸.jpg';
import T11 from './assets/shop/cafe/크루아상_투썸.jpg';



export default function App() {


    const buyItem = () => {
      Alert.alert(
        '구매',
        '상품을 구매하시겠습니까?',
        [
          {text: '취소', 
          onPress: () => {}, 
          style: 'default'},
          {
            text: '구매',
            onPress: () => 
            Alert.alert("구매 완료"),
            style: 'default',
          },
        ],
      );
    };

    const[count,setCount]=useState(45)




    return (

    <><View style={styles.secnd}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 22, marginLeft: 30, }}>카페</Text>
                <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 28, marginLeft: 230, }}>보유조각 / {count}조각</Text>
            </View>
        </View>

        <ScrollView style={styles.thrd}>
        
        <View style={{flexDirection:'row'}}>
        <Image source={H1} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>디카페인 아메리카노</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-20) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={H2} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>디카페인 카페라떼</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>23조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={H3} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>콜드브루 딜라이트</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>23조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-23) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={H4} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>유자 캐모마일</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>25조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-25) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={H5} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>복숭아 얼그레이</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>30조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-30) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={H6} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>바닐라 딜라이트</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>25조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-25) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={H7} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>딸기 치즈케익 할리치노</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>30조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-30) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={H8} style={{height: 95, width: 95,marginLeft:20,marginTop:2,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>그린티 할리치노</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>30조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-30) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={H9} style={{height: 90, width: 90,marginLeft:20,marginTop:12,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>그린티 라떼</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>25조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-25) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={T1} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>롱블랙</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>25조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-25) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={T2} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>스트로베리피치 프라페</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>할리스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>30조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-30) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={T3} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>스페니쉬 연유 라떼</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>25조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-25) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>






        <View style={{flexDirection:'row'}}>
        <Image source={T4} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>허니 레몬 티</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>28조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-28)}}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={T5} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>뉴욕 치즈 케이크</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>35조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-35) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={T6} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>레드벨벳</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>35조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-35) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>


        <View style={{flexDirection:'row'}}>
        <Image source={T7} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>클래식 루벤</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>40조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-40) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={T8} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>그릴드 치킨 샐러드</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>45조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-45)}}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>


        
        <View style={{flexDirection:'row'}}>
        <Image source={T9} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>B.E.L.T. 샌드위치</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>40조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-40) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={T11} style={{height: 90, width: 90, marginLeft:20,marginTop:15,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>크루아상</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>투썸 플레이스</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>30조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {buyItem(); setCount(count-30) }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        </ScrollView>
        </>
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
      flex:0.18,
    },
    secnd:{
      flex:0.09,
      backgroundColor:'white',
    },
    thrd:{
      flex:1.1,
      backgroundColor:"white"
    },
    four:{
      flex:0.18,
      backgroundColor:'white'
    },
    BuyButton:{
      flex:0.09,
      backgroundColor:'#078C74',
      width:55,
      marginTop:37,
      borderRadius:10,
    }
  });