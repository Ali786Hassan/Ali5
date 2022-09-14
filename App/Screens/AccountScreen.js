import React from 'react';
import colors from '../Assets/config/colors';
import { View,Text,StyleSheet,TextInput, TouchableOpacity, StatusBar,Image} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

function AccountScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
            source={require('../Assets/config/add-user.png')}/>
        
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
         placeholderTextColor={'#AAAAAA'}
         />
         <TextInput
         style={styles.input2}
         placeholder="Email"
         placeholderTextColor={'#AAAAAA'}
         />
         <TextInput
         style={styles.input1}
         placeholder="Password"
         placeholderTextColor={'#AAAAAA'}
         secureTextEntry
         />
         <TextInput
         style={styles.input1}
         placeholder="Re-Type Password"
         secureTextEntry
         />
         <Image style={styles.image4}
            source={require('../Assets/config/sig.png')}/>
         <TouchableOpacity style={styles.btn} onPress={()=>  navigation.navigate('LS')}>
         <Text style={styles.text}>
             Sign up
           </Text>
         </TouchableOpacity>
         <Text style={{marginTop:20,marginLeft:-30,fontSize:17,color:colors.lightgray,}}>Already have an account?</Text>
         <TouchableOpacity onPress={()=>  navigation.navigate('LS')}>
          <Text style={{marginLeft:225,marginTop:-23,fontWeight:'bold',color:'#05A5FA',fontSize:17}}>Sign in</Text>
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
        marginTop:20,
        width:80,
        height:80,
    },
    image4:{
        marginTop:10,
        marginLeft:20,
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
        marginTop:-80,
        marginLeft:-180,
        color:'black', 
    },
    btn:{
        backgroundColor:'#05A5FA',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        padding:15,
        borderRadius:30,
        marginTop:20,
        marginLeft:12
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    },
    input:{
        width:'90%',
        backgroundColor:'#ffffff',
        borderColor:'#e8e8e8',
        borderWidth:2,
        marginTop:140,
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
        marginTop:12,
        elevation:3,
        borderRadius:30,
    },
    input2:{
        width:'90%',
        backgroundColor:'#ffffff',
        borderColor:'#e8e8e8',
        borderWidth:2,
        padding:13,
        marginBottom:10,
        fontFamily:'Roboto-Light',
        fontSize:17,
        marginLeft:20,
        marginTop:12,
        elevation:3,
        borderRadius:30,
    },
})
export default AccountScreen;