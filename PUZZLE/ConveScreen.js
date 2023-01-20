import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button,  FlatList,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import puzzle from './assets/shop/cafe/puzzle.png';
import C1 from './assets/shop/conve/3XL뉴리치참치마요.jpg';
import C2 from './assets/shop/conve/뉴리치소고기전주.jpg';
import C3 from './assets/shop/conve/매콤판타스틱치킨버거.jpg';
import C4 from './assets/shop/conve/반숙에그샌드.jpg';
import C5 from './assets/shop/conve/백종원고기2배정식.jpg';
import C6 from './assets/shop/conve/백종원반반닭갈비.jpg';
import C7 from './assets/shop/conve/백종원불오리삼각.jpg';
import C8 from './assets/shop/conve/백종원콘치즈감자.jpg';
import C9 from './assets/shop/conve/백종원트리플불고기.jpg';
import C10 from './assets/shop/conve/빅시그니처비프버거.jpg';
import C11 from './assets/shop/conve/윤봉길한우불고기반상.jpg';
import C12 from './assets/shop/conve/점보4단햄참치.jpg';
import C13 from './assets/shop/conve/창녕양파듬뿍핫도그.jpg';
import C14 from './assets/shop/conve/쿠미마사데미함박.jpg';
import C15 from './assets/shop/conve/크랩마요유부밥바.jpg';
import C16 from './assets/shop/conve/통밀칠리치킨샌드.jpg';
import C17 from './assets/shop/conve/확실한불고기김밥.jpg';
import C18 from './assets/shop/conve/확실한제육김밥.jpg';
import C19 from './assets/shop/conve/확실한참치김밥.jpg';
import C20 from './assets/shop/conve/에그포테이토샌드.jpg';


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
                <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 22, marginLeft: 30, }}>편의점</Text>
            </View>
        </View>


        <ScrollView style={styles.thrd}>
        
        <View style={{flexDirection:'row'}}>
        <Image source={C1} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>3XL뉴리치참치마요</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C2} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>뉴리치소고기전주</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C3} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>매콤판타스틱치킨버거</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C4} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>반숙에그샌드</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C5} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>백종원고기2배정식</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C6} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>백종원반반닭갈비</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C7} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>백종원불오리삼각</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C8} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>백종원콘치즈감자</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C9} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>백종원트리플불고기</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C10} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>빅시그니처비프버거</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C11} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>윤봉길한우불고기반상</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C12} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>점보4단햄참치</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C13} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>창녕양파듬뿍핫도그</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C14} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>쿠미마사데미함박</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C15} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>크랩마요유부밥바</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C16} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>통밀칠리치킨샌드</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C17} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>확실한불고기김밥</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C18} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>확실한제육김밥</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C19} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>확실한참치김밥</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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
        <Image source={C20} style={{height: 75, width: 95, marginLeft:20, marginTop:20,}}/>
        <View style={{flexDirection:"column",marginTop:30,marginLeft:15,flex:0.9,}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>에그포테이토샌드</Text>
          <Text style={{fontSize:13,fontWeight:'400',marginTop:3,}}>CU</Text>
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