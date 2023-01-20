import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import m1955 from './assets/mypage/맥도날드1955.png';
import barcode from './assets/mypage/barcode.png';

export default function App() {
  return (
    <View style={styles.container}>


    <View style={{flex:0.0002,backgroundColor:'grey'}}>
    </View>


    <ScrollView style={styles.thrd}>

     <View style={{flexDirection:'row', marginTop:20,}}>

        <Image source={m1955} style={{height: 100, width:100,marginLeft:30,marginBottom:20,}}/>

        <View style={{flexDirection:"column",marginTop:25,marginLeft:19,}}>
          <Text style={{fontSize:20,fontWeight:'700'}}>1955버거 세트</Text>
          <Text style={{fontSize:14,fontWeight:'400',marginTop:2,}}>맥도날드</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:18,fontWeight:'600',marginTop:2,}}>20조각</Text>
          </View>
        </View>

        <TouchableOpacity>
         <Image source={barcode} style={{height: 35, width:40,marginLeft:90,marginTop:30,flex:0.1}}></Image>
        </TouchableOpacity>

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
