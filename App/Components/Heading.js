import React from 'react';
import {Text , StyleSheet} from 'react-native';
function Heading({children, style, ...props}) {
    return (
       <Text {...props} style={[style, styles.text]}>
           {children}
       </Text>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize:32,
        color:'black',
    },
})
export default Heading;