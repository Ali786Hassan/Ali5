import React from 'react';
import { StyleSheet, TextInput} from 'react-native';
function InputText({style, ...props}) {
    return (
      <TextInput  {...props} style={[style, styles.InputText]}/>
    );
}
const styles = StyleSheet.create({
    InputText:{
        backgroundColor:'#ffffff',
        width:'90%',
        padding:15,
        borderRadius:30,
        borderColor:'#e8e8e8',
        borderWidth:2,
        elevation:3,
    },
})
export default InputText;