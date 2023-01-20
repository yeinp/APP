import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import {initializeApp} from 'firebase/app'
import { getStorage,ref } from 'firebase/storage';

//Text추가
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAgOaY4mpFShHos5tuvhP5qrdOo3xKVN_Q",
    authDomain: "project-78d53.firebaseapp.com",
    databaseURL: "https://project-78d53-default-rtdb.firebaseio.com",
    projectId: "project-78d53",
    storageBucket: "project-78d53.appspot.com",
    messagingSenderId: "499184520640",
    appId: "1:499184520640:web:916703bda4c3e96630cc25"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};
  
  const app=initializeApp(firebaseConfig)
  export const storage=getStorage(app);
  export const db = getDatabase(app);