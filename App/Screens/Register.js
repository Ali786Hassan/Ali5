import React from 'react';
import { Text, View ,StyleSheet,TouchableOpacity,StatusBar,TextInput, Image} from 'react-native';
import Heading from '../Components/Heading';
import InputText from '../Components/InputText';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
function Register({navigation}) {
  return (
    <View style={styles.container} >
      <StatusBar
         backgroundColor="#AAAAAA"
         barStyle="light-content"/>
         <TouchableOpacity>
         <AntDesign style={styles.Icon} 
          onPress={()=>  navigation.goBack()}
                 size={30}
                 name='arrowleft'/>
         </TouchableOpacity>
     <Image style={styles.image}
     source={require('../Assets/config/password.png')}/>
     <Text style={{fontSize:22,fontWeight:'bold',color:'black',fontFamily:'OpenSans-BoldItalic'}}>Reset your Password</Text>
       <TextInput
         style={styles.input2}
         placeholder="Old Password"
         placeholderTextColor={'#AAAAAA'}
         secureTextEntry
         />
         <TextInput
         style={styles.input1}
         placeholder=" New Password"
         placeholderTextColor={'#AAAAAA'}
         secureTextEntry
         />
         <TextInput
         style={styles.input1}
         placeholder="Re-Type Password"
         placeholderTextColor={'#AAAAAA'}
         secureTextEntry
         />
     
     <TouchableOpacity style={{width:120,height:50,backgroundColor:'#05A5FA',borderRadius:25,marginTop:30,marginLeft:-200}}>
       <Text style={{marginLeft:40,marginTop:10,fontSize:24,fontWeight:'bold',color:'white'}}>Ok</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>  navigation.navigate('LS')}
     style={{width:120,height:50,backgroundColor:'#05A5FA',borderRadius:25,marginTop:-50,marginLeft:200}}>
     <Text style={{marginLeft:35,marginTop:10,fontSize:24,fontWeight:'bold',color:'white'}}>Next</Text>
     
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
  image:{
        marginTop:-95,
        width:90,
        height:90,
  },
  image1:{
    marginTop:5,
    width:'80%',
    height:30
},
image2:{
    marginLeft:-183,
    marginTop:20,
},
image3:{
  marginLeft:210,
  marginTop:-50,
},
  heading:{
    marginBottom:30,
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
    marginLeft:5,
    marginTop:20,
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
  marginLeft:5,
  marginTop:60,
  elevation:3,
  borderRadius:30,
},
  Icon:{
    marginTop:-90,
    marginLeft:-180,
    color:'black', 
},
  btn:{
    backgroundColor:'purple',
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    padding:15,
    borderRadius:30,
    marginTop:10,
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
  }
})
export default Register;