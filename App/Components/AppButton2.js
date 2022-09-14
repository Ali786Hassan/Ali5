import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import colors from '../Assets/config/colors';
function AppButton2({text,onPress}) {
    return (
        <View>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.AppButton}>
              <Text style={styles.buttontext}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    AppButton:{
        width:330,
        height:60,
        borderRadius:25,
        marginTop:30,
        marginLeft:35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#009933',
    },
    buttontext:{
        color:colors.white,
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:20,
        textAlign:'center',
    },
})
export default AppButton2;