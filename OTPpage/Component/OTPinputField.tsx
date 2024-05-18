import { View, StyleSheet, TextInput, Pressable, Text,OTPin } from "react-native";
import { colors } from "./colors";
import { useRef, useState,useEffect } from "react";

export default function OTPInputField({ setPinReady, code, setCode, maxLength }) {
  const codeDigitsArray = new Array(maxLength).fill(0);
  const textInputRef = useRef(null);

 const [inputContainerIsFocused,setInoutContainerIsFocused] = useState(false);

// const handleOnPress = () =>{ 
//     setInoutContainerIsFocused(true)
//     textInputRef?.current?.focus();
// }

  const handleOnBlur = () => {
    setInoutContainerIsFocused(false)
  };



useEffect(()=>{
    setPinReady(code?.length === maxLength)
    return()=> setPinReady(false)
},[code])


//   OTPInputFocus
  const toCodeDigitInput = (_value:string, index:number) => {   // error
    const emptyInputChar = "";
    const digit = code ? code[index] || emptyInputChar : emptyInputChar;

// formatting 
const isCurrentDigit = index === code?.length
const isLastDigit = index === maxLength -1
const isCodeFull = code?.length === maxLength
let valuelengthcode = code?.length-1
// console.log(code.length)
console.log(index)
const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull)
// const styledOTPInput = inputContainerIsFocused && isDigitFocused ? <Pressable style={styles.otpInput}> </Pressable>?isCodeFull
    return (
      <View style={[styles.pressView,{borderColor: index === valuelengthcode ?colors.secondary: colors.lightSecondary ,backgroundColor:index === valuelengthcode ?colors.lightSecondary: undefined}]} key={index}>
        <Text style={styles.presstext}>{digit}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.Vew}>
        <Pressable style={styles.pres}>{codeDigitsArray.map(toCodeDigitInput)}</Pressable>
        <TextInput
          style={styles.inputfield}
          value={code}
          onChangeText={setCode}
          maxLength={maxLength}
          keyboardType="number-pad"
          returnKeyLabel="done"
          textContentType="oneTimecode"
          ref={textInputRef}
          onBlur={handleOnBlur}
        />
      </View>
    </>
  );
}



const styles = StyleSheet.create({
    Vew:{
       justifyContent :"center",
alignItems:"center",
marginVertical:30,
    },

    inputfield:{
        backgroundColor:"red",
        position:"absolute",
        width:"100%",
        // height:1,
        padding:12,
        opacity:0,
        // flex:1

        // borderColor: colors.secondary,
        // borderWidth: 2,
        // borderRadius: 5,
        // padding: 12,
        // marginTop: 15, // Add "px" unit here
        // width: 300,
        // color: colors.white
    },

    pres:{
        width:"90%",
        flexDirection:"row",
        justifyContent:"space-around",
    },
    pressView:{
        // borderColor:colors.lightSecondary,
        minWidth:"13%",
        borderWidth:2,
        borderRadius:5,
        padding:12
    },
presstext:{
    fontSize:22,
    fontWeight:"bold",
    textAlign:"center",
    color:colors.white
},
otpInput:{
    // borderColor:colors.secondary,
    // backgroundColor:colors.lightSecondary
}

  })