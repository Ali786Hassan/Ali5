import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text,TextInput, Button} from 'react-native'
import colors from '../Assets/config/colors';
import RBSheet from "react-native-raw-bottom-sheet";
// import { TextInput } from 'react-native-gesture-handler';

function Addstudents(props) {
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
  const refRBSheet = useRef();
    return (
        <View>
             <View style={{backgroundColor:'#05A5FA', height:70, width:393}}>
                <Text style={{ fontSize:25, fontWeight:'bold', left:10, top:30}}>Add students</Text>
            </View>
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
            <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <Text>defeat</Text>
      </RBSheet>
            {/* <TextInput
            placeholder='Add titi'
            placeholderTextColor={colors.black}
            
            style={{borderWidth:1, borderColor:colors.black,fontSize:17, borderRadius:15, top:30, width:350, alignSelf:'center', backgroundColor:colors.white}}
            ></TextInput> */}
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