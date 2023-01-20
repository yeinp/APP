import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button,  FlatList,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import puzzle from './assets/shop/cafe/puzzle.png';
import L1 from './assets/shop/fastfood/롯데_더블X2세트.jpg';
import L2 from './assets/shop/fastfood/롯데_더블한우불고기.jpg';
import L3 from './assets/shop/fastfood/롯데_더블한우불고기세트.jpg';
import L4 from './assets/shop/fastfood/롯데_데리버거.jpg';
import L5 from './assets/shop/fastfood/롯데_롱치즈스틱(1조각).jpg';
import L6 from './assets/shop/fastfood/롯데_모짜크림치즈볼.jpg';
import L7 from './assets/shop/fastfood/롯데_불고기버거.jpg';
import L8 from './assets/shop/fastfood/롯데_원조빅불세트.jpg';
import L9 from './assets/shop/fastfood/롯데_웨지포테이토.jpg';
import L10 from './assets/shop/fastfood/롯데_치즈스틱.jpg';
import L11 from './assets/shop/fastfood/롯데_통오징어링.jpg';
import L12 from './assets/shop/fastfood/롯데_한우불고기.jpg';
import L13 from './assets/shop/fastfood/롯데_한우불고기세트.jpg';
import L14 from './assets/shop/fastfood/롯데_한우트러플머쉬룸.jpg';
import L15 from './assets/shop/fastfood/롯데_핫크리스피버거.jpg';

export default class App extends Component {

  constructor(props){0
    super(props);
    this.state={count:100};
  }

  _updateCount(){
    this.setState({
      count:this.state.count-20
    });
  }

  

  render() {


    const onIncrease = () => {
      console.log('+1')
    }
    const onDecrease = () => {
      console.log('-1');
    }


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


    return (

    <><View style={styles.secnd}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 22, marginLeft: 30, }}>패스트푸드</Text>
            </View>
        </View>


        <ScrollView style={styles.thrd}>
        
        <View style={{flexDirection:'row'}}>
        <Image source={L1} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>더블X2 세트</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={L2} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>더블 한우불고기</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={L3} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>더블 한우불고기 세트</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={L4} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>데리버거 </Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={L5} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>롱치즈스틱 (1조각)</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={L6} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>모짜 크림치즈볼</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={L7} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>불고기버거 </Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={L8} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>원조 빅불 세트</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={L9} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>웨지 포테이토</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={L10} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>치즈스틱 </Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={L12} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>한우불고기 </Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>



        <View style={{flexDirection:'row'}}>
        <Image source={L13} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>한우불고기 세트</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>






        <View style={{flexDirection:'row'}}>
        <Image source={L14} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>한우 트러플 머쉬룸</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>




        <View style={{flexDirection:'row'}}>
        <Image source={L15} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>핫크리스피 버거</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>


        <View style={{flexDirection:'row'}}>
        <Image source={L11} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>통오징어링 </Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>롯데리아</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'600',marginTop:3,}}>20조각</Text>
            <Image source={puzzle} style={{height: 14, width:14,marginLeft:3,marginTop:4,}}/>
          </View>
        </View>

        <TouchableOpacity style={styles.BuyButton} onPress={() => {this._updateCount.bind(this); buyItem() }}>
          <Text style={{fontSize:17,color:"white",fontWeight:'600',marginTop:10,marginBottom:10,marginLeft:16,}}>구매</Text>
        </TouchableOpacity>

        </View>





        </ScrollView>
        </>
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