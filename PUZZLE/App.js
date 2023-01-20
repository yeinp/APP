import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator , StackNavigationProp } from '@react-navigation/stack';
import { AntDesign, Feather, Ionicons, FontAwesome  } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Image, Button, StatusBar } from 'react-native';
import { getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import ShopScreen from './ShopScreen';
import HomeDetailScreen0 from './HomeDetailScreen0';
import HomeDetailScreen1 from './HomeDetailScreen1';
import HomeDetailScreen2 from './HomeDetailScreen2';
import HomeDetailScreen3 from './HomeDetailScreen3';
import HomeDetailScreen4 from './HomeDetailScreen4';
import HomeDetailScreen5 from './HomeDetailScreen5';
import HomeDetailScreen6 from './HomeDetailScreen6';
import HomeDetailScreen7 from './HomeDetailScreen7';
import HomeDetailScreen8 from './HomeDetailScreen8';
import HomeDetailScreen9 from './HomeDetailScreen9';


import ChatScreen from './ChatScreen';
import MypageScreen from './MypageScreen';
import WriteScreen from './WriteScreen';
import LocationScreen from './LocationScreen';
import ChatDetailScreen from './ChatDetailScreen';
import ShareScreen from './ShareScreen';
import BuyScreen from './BuyScreen';
import NicknameScreen from './NicknameScreen';
import Loading from './Loading';

import CafeScreen from './CafeScreen';
import FastfoodScreen from './FastfoodScreen';
import ChickenScreen from './ChickenScreen';
import BakeryScreen from './BakeryScreen';
import ConveScreen from './ConveScreen';
import ClothScreen from './ClothScreen';
import BeautyScreen from './BeautyScreen';
import AccScreen from './AccScreen';




const MypageStack = createStackNavigator();

function MypageStackScreen() {
  return (
    <MypageStack.Navigator>
        <MypageStack.Screen name="ChatScreen" component={MypageScreen}
        options={{
          title:'',
          headerLeft:()=>
            <View>
              <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>마이페이지</Text>
            </View>,
      }}/>
        <MypageStack.Screen name="ShareScreen" component={ShareScreen}
        options={{
          title:'나눔내역',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <MypageStack.Screen name="BuyScreen" component={BuyScreen}
        options={{
          title:'구매내역',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
    </MypageStack.Navigator>
  );
}


const ChatStack = createStackNavigator();

function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
        <ChatStack.Screen name="ChatScreen" component={ChatScreen}
        options={{
          title:'',
            
          headerLeft:()=>
            <View>
              <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>채팅</Text>
            </View>,


      }}/>
        <ChatStack.Screen name="ChatDetailScreen" component={ChatDetailScreen}
        options={{
          title:'쿨나눔해요',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
    </ChatStack.Navigator>
  );
}

const ShopStack = createStackNavigator();

function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
        <ShopStack.Screen name="ShopScreen" component={ShopScreen}
        options={{
          title:'',
            
          headerLeft:()=>
            <View>
              <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>샵</Text>
            </View>,


      }}/>
        <ShopStack.Screen name="CafeScreen" component={CafeScreen}
        options={{
          title:'',
            
          headerLeft:()=>
            <View>
              <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>샵</Text>
            </View>,


      }}/>
        <ShopStack.Screen name="FastfoodScreen" component={FastfoodScreen}/>
        <ShopStack.Screen name="ChickenScreen" component={ChickenScreen}/>
        <ShopStack.Screen name="BakeryScreen" component={BakeryScreen}/>
        <ShopStack.Screen name="ConveScreen" component={ConveScreen}
        options={{
          title:'',
            
          headerLeft:()=>
            <View>
              <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>샵</Text>
            </View>,


      }}/>
        <ShopStack.Screen name="ClothScreen" component={ClothScreen}/>
        <ShopStack.Screen name="BeautyScreen" component={BeautyScreen}/>
        <ShopStack.Screen name="AccScreen" component={AccScreen}/>

    </ShopStack.Navigator>
  );
}

const HomeDetailStack = createStackNavigator();

function HomeDetailStackScreen() {
  return (
    <HomeDetailStack.Navigator>
        <HomeDetailStack.Screen name="HomeScreen" component={HomeScreen}
        options={{
          title:'',
            
          headerLeft:()=>
            <View>
              <Text style={{fontWeight:'700',marginLeft:30, fontSize:21, marginBottom:6, }}>성북구</Text>
            </View>,


      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen0" component={HomeDetailScreen0}
        options={{
          title:'하이',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="ChatDetailScreen" component={ChatDetailScreen}
        options={{
          title:'쿨나눔해요',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen1" component={HomeDetailScreen1}
        options={{
          title:'쿨나눔해요',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen2" component={HomeDetailScreen2}
        options={{
          title:'성여입직거래',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}
        />
        <HomeDetailStack.Screen name="HomeDetailScreen3" component={HomeDetailScreen3}
        options={{
          title:'나눔조아',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen4" component={HomeDetailScreen4}
        options={{
          title:'닝냥뇽',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen5" component={HomeDetailScreen5}
        options={{
          title:'퍼즐퍼즐',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen6" component={HomeDetailScreen6}
        options={{
          title:'무나하는사람',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen7" component={HomeDetailScreen7}
        options={{
          title:'쿨나눔해요',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen8" component={HomeDetailScreen8}
        options={{
          title:'우나나나나',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
        <HomeDetailStack.Screen name="HomeDetailScreen9" component={HomeDetailScreen9}
        options={{
          title:'쿨나눔해요',
          headerBackTitleVisible: false,
          headerBackImage:false, 
          headerLeft:()=>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" style={{marginLeft:10}}/>
          </TouchableOpacity>
      }}/>
    </HomeDetailStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

const Root = () => {

  return (
        <Tab.Navigator>
            <Tab.Screen name="HOME" component={HomeDetailStackScreen} 
            options= {({ route }) => ({
              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                console.log(routeName)
                if (routeName === 'HomeDetailScreen0') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen1') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen2') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen3') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen4') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen5') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen6') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen7') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen8') {
                  return { display: "none" }
                }
                else if (routeName === 'HomeDetailScreen9') {
                  return { display: "none" }
                }
                else if (routeName === 'ChatDetailScreen') {
                  return { display: "none" }
                }
              })(route),
              headerShown:false,
              unmountOnBlur:true,
              tabBarLabel: ' ',
              tabBarIcon: ({focused}) => (<Ionicons name="ios-home-outline" size={24} color="black" style={{color:focused ? '#078C74' :'#BDBDBD', marginTop:14,}}/>) 
          })}/>
            <Tab.Screen name="SHOP" component={ShopStackScreen} 
            options={{
              headerShown:false,
              tabBarLabel:' ',
              tabBarIcon: ({focused}) =>(<Ionicons name="cart-outline" size={27} color="black" style ={{color:focused ? '#078C74' :'#BDBDBD', marginTop:12,}} />)
          }}/>
            <Tab.Screen name="WRITE" component={WriteScreen} 
             options={({navigation})=>({


              // tabBarStyle: { display: "none" },
              tabBarLabel: ({color}) => (<AntDesign name="pluscircle" size={36} color="#078C74" style={{marginBottom:3,}} />),
              tabBarIcon: ({color}) => (<AntDesign name="pluscircle" size={30} color="white" />),
              headerShown:false,
              headerRight:()=>
            <Button
            title="완료"
            onPress={()=>{navigation.navigate("HomeScreen");}}/>
            // ()=>{uploadImage();onPress()}

          })}/>
            <Tab.Screen name="CHAT" component={ChatStackScreen} 
            options= {({ route }) => ({
              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                console.log(routeName)
                if (routeName === 'ChatDetailScreen') {
                  return { display: "none" }
                }
                return
              })(route), 
              tabBarLabel: ' ',
              headerShown:false,
              tabBarIcon: ({focused}) => (<Ionicons name="chatbox-ellipses-outline" size={24} color="black" style={{color:focused ? '#078C74' :'#BDBDBD', marginTop:12,}}/>) 
          })}/>
            <Tab.Screen name="MYPAGE" component={MypageStackScreen} 
            options={{
              tabBarLabel: ' ',
              headerShown:false,
              tabBarIcon: ({focused}) => (<Ionicons name="person-outline" size={24} color="black" style={{color:focused ? '#078C74' :'#BDBDBD', marginTop:12,}} />) 
          }}/>
        </Tab.Navigator>
  );
};



const Stack = createStackNavigator();

function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="nickname" component={NicknameScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="location" component={LocationScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="loading" component={Loading}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="main" component={Root}
        options={{
          headerShown:false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;