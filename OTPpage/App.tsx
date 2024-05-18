import { StatusBar, StyleSheet, Text, View ,Pressable, Keyboard, TouchableOpacity} from "react-native";
import { colors } from "./Component/colors";
import OTPInputField from "./Component/OTPinputField";
import { useState } from "react";
export default function App(){


const [code,setCode] = useState()
const [pinReady,setPinReady] = useState(false);
const MAX_CODE_LENGTH = 6;

  return(
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
    <StatusBar barStyle={"light-content"}/>
    <Text style={styles.text}> Enter the received OTP</Text>
    <OTPInputField
    setPinReady={setPinReady}
    code={code}
    setCode={setCode}
    maxLength={MAX_CODE_LENGTH}
    />
    <TouchableOpacity style={[styles.touchableopacity,{backgroundColor: !pinReady ? colors.lightSecondary : colors.secondary,}]} disabled={!pinReady}>
<Text style={[styles.ButtonText,{color: !pinReady ? colors.primary : colors.white}]}>
Submit
</Text>

    </TouchableOpacity>

    </Pressable>

  )
}

const styles = StyleSheet.create({
  container:{
flex:1,
backgroundColor:colors.primary,
alignItems:"center",
justifyContent:"center"
  },
  text:{
    color:"white",
    fontSize:15
  },
  touchableopacity:{
    padding:15,

    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    marginVertical:5,
    height:60,
    width:"70%",
  },
  ButtonText:{
    color:colors.white,
    fontSize:15
  }
})