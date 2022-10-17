
import React, { useState, useEffect } from 'react';
import { SafeAreaView , FlatList, StyleSheet,Image, Text, View, TouchableHighlight} from 'react-native';
import colors from '../Assets/config/colors';
import  BackIcon  from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';
// import { TouchableHighlight } from 'react-native-gesture-handler';


const Data=[
  {
    id:1,
    username:'Akhtar',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:2,
    username:'M Mehdi',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
 
  {
    id:3,
    username:'Qasim',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:4,
    username:'Hussain',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:5,
    username:'Measum',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:6,
    username:'Kumail',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:7,
    username:'Aabis',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:8,
    username:'Shaheer',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:9,
    username:'Ghazi',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:10,
    username:'Naqi',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:11,
    username:'Hammad',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:12,
    username:'Rehman',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:13,
    username:'Rahim',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:14,
    username:'Qussain',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:15,
    username:'Ali shan',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },
  {
    id:16,
    username:'Yawar',
    pic: require('../Assets/Images/men.png'),
    p:'Present',
    a:'Absent',
  },

  
]
// const onpress()=>{

// }
function Test({navigation, index}) {
  var [ isPress, setIsPress ] = React.useState(false);
    const [isSelected, setSelected ]=useState(false);
    const [isSelected1, setSelected1 ]=useState(false)
    var [ isPress, setIsPress ] = React.useState(false);
    const [currentSelected, setCurrentSelected] = useState([0]);
    const [currentSelectedA, setCurrentSelectedA] = useState([0]);
    
    var touchProps = {
      activeOpacity: 1,
      underlayColor: colors.lik,                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => console.log("Hello"),                // <-- "onPress" is apparently required
    };
    var touchProps1 = {
      activeOpacity: 1,
      underlayColor: '#F2A20C',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => console.log("Hello"),                // <-- "onPress" is apparently required
    };
    return (
        <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          <View>
            <View style={{backgroundColor:'#05A5FA', width:355, height:65,marginTop:5,marginLeft:5,borderRadius:20}}>
             
              <Text style={{color:'white' , fontSize:30,fontFamily:'OpenSans-BoldItalic', top:12, left:125}}>Class IX</Text>
              <BackIcon style={{ color:colors.white,marginTop:-19,marginLeft:20}} 
              onPress={()=>  navigation.goBack()} 
              size={25}
              name='arrow-back-ios'/>
            </View>
          </View>
          <View style={{width:410, height:1, backgroundColor:colors.gray, marginTop:10, }}></View>
            <FlatList style={{}}
              data={Data}
              renderItem={({item}) =>(
              
            <View style={{
              flex: 1,
              height:60,
              marginTop: 8,
              borderColor:'white'}}>
            <Text style={{fontSize:18,color:'black',left:65,top:35, fontFamily:'Roboto-Italic'}}>
                {item.username}
            </Text>
            <Image style={{width:50, height:50, left:12,marginBottom:9}} source={item.pic}/>
            <View style={{width:410, height:1, backgroundColor:colors.gray}}></View>
            <View style={{flexDirection:'row'}}> 
            <TouchableHighlight
            {...touchProps}
              style={{width:80,
              height:30,
              backgroundColor:colors.white,
              left:170,
              bottom:45,
              borderRadius:20,
              elevation:8,
              borderWidth:1,
              borderColor:colors.accentRed
            }}
            onPress={() => console.log(item.username,item.p)}
            >
            <Text style={styles.present}
           
            >{item.p}</Text>
            </TouchableHighlight>
            <TouchableHighlight 
            {...touchProps1}
            style={{
              width:80,
              height:30,
              backgroundColor:colors.white,
              left:180,
              bottom:45,
              borderRadius:20,
              elevation:8,
              borderWidth:1,
              borderColor:colors.red
            }}
            onPress={() => console.log(item.username,item.a)}
            >
            <Text style={styles.absent}>{item.a}</Text>
            </TouchableHighlight>
            </View>
          </View>        
    )}
        keyExtractor={item => item.id}
      />
      
      
        </SafeAreaView>
        
    );
};
const styles = StyleSheet.create({
  present:{
    left:15,
    top:3,
    fontSize:14,
    fontWeight:'bold'
    
  },
  absent:{
    left:16,
    top:3,
    fontSize:14,
    fontWeight:'bold'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    width:80,
    height:30,
    alignItems: 'center',
    marginTop:-40,
    marginLeft:140
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  }

})
export default Test;