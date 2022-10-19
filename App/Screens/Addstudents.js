import React, { useCallback, useMemo, useRef, useState,  } from 'react';
import { View, Text,TextInput, Button, TouchableOpacity} from 'react-native'
import colors from '../Assets/config/colors';
import firestore from '@react-native-firebase/firestore';
// import {  } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-gesture-handler';

function Addstudents(props) {

  
  const [value, setValue]= useState()
  //   const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // // variables
  // const snapPoints = useMemo(() => ['25%', '50%'], []);

  // // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // }, []);
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);
  // const BGcolor={
  //   refRBSheet()={
  //         backgroundColor:'#D3D3D3'
  //       }
  // }
  firestore()
  .collection('Auth_code')
  .doc('Class_IX')
  .add({
    name: 'Ada Lovelace',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  });
  const Addstudent  = ()=>{
    console.log(value)
  }
  const refRBSheet = useRef();
    return (
        <View >
             <View style={{backgroundColor:'#05A5FA', height:70, width:393}}>
                <Text style={{ fontSize:25, fontWeight:'bold', left:10, top:30}}>Add students</Text>
            </View>
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
           <Text>{value}</Text>
           
           
            <RBSheet 
        ref={refRBSheet}
        
       
        closeOnPressMask={false}
        
        height={600}
        closeOnDragDown
        customStyles={{
          wrapper: {
            // backgroundColor: "#D3D3D3",
            // opacity:0.5
            
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:30}}>Welcome</Text>
        <TextInput
            placeholder='Add titi'
            placeholderTextColor={colors.black}
            onChangeText={data => setValue(data)}
            value={value}
            style={{borderWidth:1, borderColor:colors.black,fontSize:17, borderRadius:15, top:30, width:350, alignSelf:'center', backgroundColor:colors.white}}
            ></TextInput>
            <TouchableOpacity
            onPress={Addstudent}
            style={{
              backgroundColor:'black',
              width:300,
              height:50,
              top:50
            }}
            >
              <Text>
                Add
              </Text>
            </TouchableOpacity>

      
      </RBSheet>
            
            {/* <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider> */}
        </View>
    );
}

export default Addstudents;