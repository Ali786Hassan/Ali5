import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

 export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1}  style={{ marginBottom:30}}>
        <View style={{ marginTop: 10, padding:15, backgroundColor:'white'}}>
           
        <RestaurantImage/>
        < ResturantInfo/>
        </View>
        </TouchableOpacity>
    );
}
const RestaurantImage = () => (
    <>
    <Image source={require('../Assets/Images/jn.jpg')}
            style={{ width:"100%" , height:180}}
             />
    <TouchableOpacity style={{ position:'absolute',right:25, top:30 }}>
        <Feather name="heart" size={25} color='#fff'/>
        
        </TouchableOpacity>
    </>
);
const ResturantInfo = () => (
    <View style={{ 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
         }}
        >
      <View>
        <Text style={{fontSize:15, fontWeight:'bold'}}>Farmhouse Kitchen Thai Cuisine</Text>
        <Text style={{fontSize:13, color:'gray'}}>30-45 .min</Text>
        </View>
        <View style={{
            backgroundColor:'#eee', 
            height:30, 
            width:30,
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 15,
    }}>
        <Text style={{fontWeight:'bold'}}>4.5</Text>
        </View>
    </View>
);