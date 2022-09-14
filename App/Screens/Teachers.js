
import React, { useState } from 'react';
import { SafeAreaView , FlatList, StyleSheet,Image, Text, View, TouchableOpacity} from 'react-native';
import colors from '../Assets/config/colors';
import  BackIcon  from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';


const Data=[
  {
    id:1,
    username:'Sir Tauqeer',
    pic: require('../Assets/Images/man.png'),
    
    
  },
  {
    id:2,
    username:'Sir Abbas',
    pic: require('../Assets/Images/man.png'),
  },
 
  {
    id:3,
    username:'Sir Jauher',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:4,
    username:'Sir Mustafa',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:5,
    username:'Sir Hussain',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:6,
    username:'Sir Furqan',
    pic: require('../Assets/Images/man.png'),
    
  },
  {
    id:7,
    username:'Sir Ali Hassan',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:8,
    username:'Sir Safdar',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:9,
    username:'Sir Jawwad',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:10,
    username:'Sir Mujtuba',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:11,
    username:'Sir Abbas Mehdi',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:12,
    username:'Sir Qaem',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:13,
    username:'Sir Ali Raza',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:14,
    username:'Sir Hadi',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:15,
    username:'Sir Kumail',
    pic: require('../Assets/Images/man.png'),
  },
  {
    id:16,
    username:'Sir Aun',
    pic: require('../Assets/Images/man.png'),
  },

  
]
// const windowWidth = Dimensions.get('window').width;

function Test({navigation}) {
    const [isSelected, setSelected ]=useState(false);
    const [isSelected1, setSelected1 ]=useState(false)
    var [ isPress, setIsPress ] = React.useState(false);
    // const [dimensions, setDimensions] = useState({ window, screen });
    return (
        <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          <View>
            <View style={{backgroundColor:'#33cc33', width:355, height:65,marginTop:5,marginLeft:5,borderRadius:20}}>
              
              <Text style={{color:'white' , fontSize:30,fontFamily:'OpenSans-BoldItalic' ,top:12, left:120}}>Teachers</Text>
              <BackIcon style={{ color:colors.white,marginTop:-19,marginLeft:20}} 
              onPress={()=>  navigation.goBack()} 
              size={25}
              name='arrow-back-ios'/>
            </View>
            
          </View>
            <FlatList style={{}}
        data={Data}
        renderItem={({item}) =>(
          
            <View style={styles.container}>
            <Text style={{fontSize:18,color:'black',left:65,top:35, fontFamily:'Roboto-Italic'}}>
                {item.username}
            </Text>
            <Image style={{width:50, height:50, left:12,marginBottom:9}} source={item.pic}/>
            <View style={{width:410, height:1, backgroundColor:colors.gray}}></View>
            <View style={{flexDirection:'row'}}> 
            <TouchableOpacity style={[isPress ? styles.absent : styles.present]}>
                <Text style={{ marginLeft:10,marginTop:4,color:'white',fontWeight:'bold'}}>Absent</Text>

            </TouchableOpacity>
            <TouchableOpacity style={[isPress ? styles.present : styles.absent]}>
                  <Text style={{ marginLeft:10,marginTop:4,color:'white',fontWeight:'bold'}}>Present</Text>
            </TouchableOpacity>
            </View>
            </View>
            
    )}
        keyExtractor={item => item.id}
      />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  absent:{
    width:70, 
    height:30, backgroundColor:'#33cc33', borderWidth:1,
               borderColor:'#33cc33', borderRadius:15, top:-50, left:200,
               marginLeft:10
  },
  present:{
    width:70, height:30, backgroundColor:colors.red, borderWidth:1,
               borderColor:'red', borderRadius:15, top:-50, left:200
  },
    container:{
    flex: 1,
    height:60,
    marginTop:10,
    borderColor:'white'
},
btn:{
  width:300,
  height:55,
  borderRadius:35,
  marginTop:20,
  marginBottom:20,
  marginLeft:58,
  alignItems:'center',
  justifyContent:'center',
  elevation:4,
  backgroundColor:'#18AEC7',
  
},
buttontext:{
  color:colors.white,
  fontWeight:'bold',
  fontSize:23,
  textAlign:'center',
},
})
export default Test;