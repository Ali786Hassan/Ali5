import React from 'react';
import colors from '../Assets/config/colors';
import { View,Text,StyleSheet,TextInput, TouchableOpacity, StatusBar,Image} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

function LS({navigation}) {
    return (
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
         style={styles.input}
         placeholder="@User name"
         />
         <TextInput
         style={styles.input1}
         placeholder="Password"
         secureTextEntry
         />
        <TouchableOpacity onPress={()=>  navigation.navigate('Register')} >
         <Text style={{marginTop:-5,fontSize:17,marginLeft:180,color:colors.lightgray}}>Forgot password ?</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={()=>  navigation.navigate('Dashboard')}
         style={styles.btn}>
           <Text style={styles.text}>
             Login
           </Text>
        </TouchableOpacity>
         
         <Text style={{marginTop:20,marginLeft:-30,fontSize:17,color:colors.lightgray,}}>Don't have an account?</Text>
         <TouchableOpacity>
         <Text style={{marginLeft:210,marginTop:-23,fontWeight:'bold',color:'#05A5FA',fontSize:17}} 
           onPress={()=>  navigation.navigate('AccountScreen')} >
          Sign up</Text>  
         </TouchableOpacity>
         </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    image:{
        marginTop:25,
        width:90,
        height:90,
    },
    btn:{
        backgroundColor:'#05A5FA',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        padding:15,
        borderRadius:30,
        marginTop:60,
        marginLeft:12
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    },
    con:{
    flex:1,
    marginTop:-110,
    marginRight:15,
    alignItems:'center',
    width:'100%',
    height:'20%',
    },
    Icon:{
        marginTop:-130,
        marginLeft:-180,
        color:'black', 
    },
    input:{
        width:'90%',
        backgroundColor:'#ffffff',
        borderColor:'#e8e8e8',
        borderWidth:2,
        marginTop:155,
        padding:13,
        marginBottom:10,
        fontFamily:'Roboto-Light',
        fontSize:17,
        marginLeft:20,
        elevation:3,
        borderRadius:30,
    },
    input1:{
        width:'90%',
        backgroundColor:'#ffffff',
        borderColor:'#e8e8e8',
        borderWidth:2,
        padding:13,
        marginBottom:10,
        fontFamily:'Roboto-Light',
        fontSize:17,
        marginLeft:20,
        marginTop:15,
        elevation:3,
        borderRadius:30,
    },
})
export default LS;