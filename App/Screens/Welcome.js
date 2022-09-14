import React from 'react';
import { View,StyleSheet, Image ,StatusBar,TouchableOpacity} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar
         backgroundColor="#18AEC7"
         barStyle="light-content"/>
          <Image style={styles.Welcome}
          source={require('../Assets/config/welcome.png')}/>
          <Image style={styles.Wel}
          source={require('../Assets/config/wl.png')}/>
          <Image style={styles.thank}
          source={require('../Assets/config/Thank.png')}/>
          <TouchableOpacity onPress={()=>  navigation.navigate('LS')}>
          <Image style={styles.btn}
          source={require('../Assets/config/arrow.png')}/>
          <AntDesign style={styles.Icon} 
                 size={35}
                 name='arrowright'/>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ffffff',
        paddingTop:120,
    },
    Welcome:{
        marginTop:-140,
        width:'100%',
        height:'60%',
    },
    Wel:{
        marginTop:15,
    },
    thank:{
        marginTop:30,
    },
    btn:{
        marginTop:40,
        marginLeft:230,
    },
    Icon:{
        marginTop:-40,
        marginLeft:260,
        color:'white',
        
    }
})
export default Welcome;