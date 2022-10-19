import React, { useContext } from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity, Button} from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { AuthContext } from '../../AuthProvider';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import colors from '../Assets/config/colors';

const Service = ({navigation}) => {
    // const {logout,user}=useContext(AuthContext);
    return (
        <View style={{flex:1, backgroundColor:colors.white}}>
            <View style={{backgroundColor:'#05A5FA', height:70, width:393,alignSelf:'center',alignItems:'center'}}>
                <Text style={{ fontSize:30, fontWeight:'bold',top:15,color:'#ffffff'}}>Services</Text>
                <TouchableOpacity>
                  <Icon style={styles.Icon1} 
                    size={35}
                    name='logout'/>
               </TouchableOpacity>
            </View>
            <View style={{borderRadius:20, backgroundColor: "#6D81FE", width:180, height:180, top:80, left:10}}
            onStartShouldSetResponder={()=>navigation.navigate('Addstudents')}
            
            >
                <Text style={{color:'white', fontSize:20, left:35, top:100, fontWeight:'bold'}}>Attendence</Text>
                <Image style={styles.image}
            source={require('../Assets/Images/Attencence.png')}/>
            </View>
            <View style={{borderRadius:20,backgroundColor: "#42C3A7", width:180, height:180, top:100, left:10}}>
            <Text style={{color:'white', fontSize:20, left:50, top:100, fontWeight:'bold'}}>Settings</Text>
            <Image style={styles.image2}
            source={require('../Assets/Images/setting.png')}/>
            
            </View>
            <View style={{borderRadius:20,backgroundColor: "#FF9575", width:180, height:180, top:-280, left:200}}>
            <Text style={{color:'white', fontSize:20, left:55, top:100, fontWeight:'bold'}}>Results</Text>
            <Image style={styles.image1}
            source={require('../Assets/Images/result.png')}/>
             
            </View>
            <View style={{borderRadius:20,backgroundColor: "purple", width:180, height:180, top:-260, left:200}}
            >
              <Text style={{color:'white', fontSize:20, left:13, top:100, fontWeight:'bold'}}>Teachers Record</Text>
              <Image style={styles.image2}
            source={require('../Assets/Images/edit.png')}/>
            </View>
            <TouchableOpacity
            style={{borderRadius:20,backgroundColor: "purple", width:300, height:80, top:-260, }}
            // onPress={()=>logout()}
            >
                {/* <Text style={{fontsize:20}}>hyper{user.uid}</Text> */}
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
       width:70,
       height:70,
       marginLeft:50
    },
    image1:{
        width:70,
       height:70,
       marginLeft:50,
       marginTop:5
    },
    image2:{
        width:70,
       height:70,
       marginLeft:60,
       marginTop:5
    },
    Icon1:{
        color:colors.white,
        marginTop:-25,
        marginLeft:320,
    },
})
export default Service;