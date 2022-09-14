import React from 'react';
import { View ,StyleSheet, Text, TouchableOpacity, ImageBackground,StatusBar } from 'react-native';
import colors from '../Assets/config/colors';
import AppButton from '../Components/AppButton';
import AppButton1 from '../Components/AppButton1';
import  BackIcon  from 'react-native-vector-icons/AntDesign';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import AppButton2 from '../Components/AppButton2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function Dashboard({navigation}) {
    return (
    <View style={styles.con}>
          <StatusBar
         backgroundColor="#AAAAAA"
         barStyle="light-content"/>
          <View style={styles.container1}>
         
         <TouchableOpacity>
          <BackIcon style={styles.Icon} 
                 size={40}
                 name='bars'/>
       </TouchableOpacity>
            <Text style={styles.Dashboard}>
                HOME
            </Text>
          </View>
          <TouchableOpacity onPress={()=>  navigation.navigate('LS')}>
          <Icon style={styles.Icon1} 
                 size={35}
                 name='logout'/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={()=>  navigation.navigate('ClassIX')}>
       <Text style={styles.buttontext}>
         Class IX
       </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn2} onPress={()=>  navigation.navigate('ClassX')}>
       <Text style={styles.buttontext}>
         Class X
       </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn3} onPress={()=>  navigation.navigate('Teachers')}>
       <Text style={styles.buttontext}>
         Teachers
       </Text>
     </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container1:{
        width:345,
        height:65,
        marginTop:5,
        marginBottom:20,
        marginLeft:10,
        borderRadius:10,
        backgroundColor:'#05A5FA',
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
    },
    con:{
       flex:1,
       backgroundColor:'#ffffff',
    },
    backimg:{
        width:'100%',
        height:'100%',
    },
    Icon:{
        color:colors.white,
        marginTop:2,
        marginRight:290,
    },
    Icon1:{
      color:colors.white,
      marginTop:-70,
      marginLeft:310,
  },
    Dashboard:{
        marginTop:-35,
        color:'white',
        fontSize:25,
        fontWeight:'bold', 
        fontFamily:'OpenSans-BoldItalic',
    },
    btn:{
      width:300,
      height:60,
      borderRadius:30,
      marginTop:110,
      marginLeft:35,
      alignItems:'center',
      justifyContent:'center',
      elevation:5,
      backgroundColor:'#ffffff',
      borderColor:'#05A5FA',
      borderWidth:4,
  },
  btn2:{
        width:300,
        height:60,
        borderRadius:30,
        marginTop:50,
        marginLeft:35,
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        backgroundColor:'#ffffff',
        borderColor:'#05A5FA',
        borderWidth:4,
        
  },
  btn3:{
        width:300,
        height:60,
        borderRadius:30,
        marginTop:50,
        marginLeft:35,
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        backgroundColor:'#ffffff',
        borderColor:'#33cc33',
        borderWidth:4,
  },
  buttontext:{
    color:colors.lightgray,
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:18,
    textAlign:'center',
},
})
export default Dashboard;