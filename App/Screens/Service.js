import React, { useContext } from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity, Button} from 'react-native'
// import {  } from 'react-native-gesture-handler';
import { AuthContext } from '../../AuthProvider';
import colors from '../Assets/config/colors';

const Service = ({navigation}) => {
    const {logout,user}=useContext(AuthContext);
    return (
        <View style={{flex:1, backgroundColor:colors.white}}>
            <View style={{backgroundColor:'#05A5FA', height:70, width:393}}>
                <Text style={{ fontSize:25, fontWeight:'bold', left:10, top:30}}>Service</Text>
            </View>
            <View style={{borderRadius:20, backgroundColor: "#6D81FE", width:180, height:180, top:80, left:10}}
            onStartShouldSetResponder={()=>navigation.navigate('Addstudents')}
            
            >
                <Text style={{color:'white', fontSize:20, left:20, top:100, fontWeight:'bold'}}>Attendence</Text>
                <Image style={styles.image}
            source={require('../Assets/Images/Attencence.png')}/>
            </View>
            <View style={{borderRadius:20,backgroundColor: "#42C3A7", width:180, height:180, top:100, left:10}}>

            </View>
            <View style={{borderRadius:20,backgroundColor: "#FF9575", width:180, height:180, top:-280, left:200}}>

            </View>
            <View style={{borderRadius:20,backgroundColor: "purple", width:180, height:180, top:-260, left:200}}
            
            >

            </View>
            <TouchableOpacity
            
            style={{borderRadius:20,backgroundColor: "purple", width:300, height:80, top:-260, }}
            onPress={()=>logout()}
            >
                <Text style={{fontsize:20}}>hyper{user.uid}</Text>
               
            </TouchableOpacity>
                


        </View>
    );
}
const styles = StyleSheet.create({
    image:{
       width:60,
       height:60,
       marginLeft:50
    }
})
export default Service;