import React from 'react';
import { View,StyleSheet, TextInput,Image} from 'react-native';
import colors from '../Assets/config/colors';
function SearchBox(props) {
    return (
       <View style={styles.searchbox} >
        <Image style={styles.iconsearch}
         source={require("../Assets/config/searchicon.jpg")}
        />
        <TextInput style={styles.text} placeholder="Search" placeholderTextColor="#cdd1ce" ></TextInput>
       </View>
    );
}
const styles = StyleSheet.create({
    searchbox:{
        backgroundColor:colors.white,
        width: 380,
        height:50,
        borderRadius:50,
        marginTop:70,
        marginBottom:-30,
        marginLeft:25,
        borderColor:'#e3e3e3',
        borderWidth:1,
        elevation:3,
        flexDirection:'row'
        },
    iconsearch:{
        width:20,
        height:20,
        marginTop:15,
        marginLeft:9,
    },
    text:{
        marginLeft:5,
        color:colors.lightgray,
        fontSize:17,
        textAlignVertical:'center',
        flex:1,
        
    },
})
export default SearchBox;