
import { StyleSheet, Text, View,TextInput, Alert,Image,StatusBar,TouchableOpacity } from 'react-native';
import React, { Component, useState } from 'react';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
// import firestore from '@react-native-firebase/firestore';


const LS =({navigation})=>{
//   const [code, Setcode]=useState({
//     Code:''
//   });
  
//   const onValue =Code=>{
//     Setcode(({ code:Code}))
//   };
//   const onPressButton= ()=> {
//     // firestore()
//     // .collection('Auth_code')
//     // .where('code','==',code.Code)
//     // .get()
//     // .then(() => {
//     //   console.log('User added!');
//     // });
//     if(code.Code = 'Admin'){
//       console.log(code.Code)
//     }
//     else{
//       console.log("error 404")
//     }
    
// };

const [code, setCode] = useState()
const OnPress = (code) => {

  switch(code) {

    case 'admin':
      navigation.navigate('Service')
      break;
    
    // case 'teacher':
    //   console.log('two')
    //   break;

    // case 'acadmeics':
    //   console.log('three')
    //   break;
      
    default:
      Alert.alert("NUMBER NOT FOUND");
  
    }
}
  return (
    // <View>
    //  <TextInput
    //  value={code}
    //   onChangeText={data => setCode(data)}
    //  style={{borderWidth:5,
    //           top:20,
    //           borderColor:'black'
    // }}
    //  ></TextInput>
    //  <View
    //  onStartShouldSetResponder={()=>OnPress(code)}
    //  style={{
    //   backgroundColor:'black',
    //   width:300,
    //   height:50,
    //   top:100
    //  }}
    //  >
    //     <Text
    //     style={{color:'white'}}
    //     >
    //       Login
    //     </Text>
    //  </View>
    // </View>
    <View style={styles.container}>
            <Image style={styles.image}
            source={require('../Assets/config/locked.png')}/>
           <Image style={styles.in}
            source={require('../Assets/config/login.png')}/>
         <StatusBar
         backgroundColor="#AAAAAA"
         barStyle="light-content"/>
         <TouchableOpacity>
         <AntDesign style={styles.Icon} 
          onPress={()=>  navigation.goBack()}
                 size={30}
                 name='arrowleft'/>
         </TouchableOpacity>
         <View style={styles.con}>
         <TextInput
         onChangeText={data => setCode(data)}
         value={code}
         style={styles.input}
         placeholder="Email"
        //  onChangeText={(userEmail)=> setEmail(userEmail)}
         iconType="user"
        //  lableValue={email}
         keyboardType='email-address'
         autoCapitalize='none'
         autoCorrect={false}
         />
         <TouchableOpacity onPress={()=>OnPress(code)}
         style={styles.btn}>
           <Text style={styles.text}>
             Login
           </Text>
        </TouchableOpacity>
         </View>
      </View>
  );
    }


const styles = StyleSheet.create({
    image:{
        marginTop:35,
        width:90,
        height:90,
        marginLeft:140,
    },
    in:{
       marginLeft:138,
       marginTop:10
    },
    con:{
        flex:1,
        marginTop:-110,
        marginRight:15,
        alignItems:'center',
        width:'100%',
        height:'20%',
        },
        text:{
            fontSize:24,
            fontWeight:'bold',
            color:'white',
        },
        Icon:{
            marginTop:-130,
            marginLeft:20,
            color:'black', 
        },
        input:{
            width:'90%',
            height: 60,
            backgroundColor:'#ffffff',
            borderColor:'#e8e8e8',
            borderWidth:2,
            marginTop:190,
            padding:13,
            marginBottom:10,
            fontFamily:'Roboto-Light',
            fontSize:17,
            marginLeft:6,
            elevation:3,
            borderRadius:30,
        },
        btn:{
            backgroundColor:'#05A5FA',
            alignItems:'center',
            justifyContent:'center',
            width:'90%',
            height:60,
            padding:15,
            borderRadius:30,
            marginTop:60,
            marginLeft:3
        },
});
export default LS;