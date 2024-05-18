import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import auth from '@react-native-firebase/auth';

export default function App() {
  const [Mobile, setMobile] = useState<string>("");
  const [otpInput, setOTPInput] = useState("");
  const [confirmData, setConfirmData] = useState("");
  const sendOTP =async () => {
    try {
      // Your logic for sending OTP
    const MobileNumber = '+92'+Mobile
const response = await auth().signInWithPhoneNumber(MobileNumber);
setConfirmData(response);
console.log(response)
      // alert("otp is sent veify")
    } catch (e) {
      
      console.log(e);
    }
  };
  
  const submitOTP = async() => {
    try {
      const respnse = await confirmData.confirm(otpInput)
   console.log(respnse)
   alert("sucess")
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ backgroundColor: "red" }}>
        <TextInput
          style={{
            borderColor: "black",
            width: 300,
            height: 40,
            borderWidth: 2,
            marginHorizontal: 20,
            color: "black",
          }}
          placeholder="Enter Your Mobile Number"
          onChangeText={(value) => {
            setMobile(value);
          }}
        />
      </View>
      <Button title="send OTP" onPress={() => sendOTP()} />

      <TextInput
        style={{
          borderColor: "black",
          width: 300,
          height: 40,
          borderWidth: 2,
          marginHorizontal: 20,
        }}
        placeholder="Enter Your OTP"
        onChangeText={(value) => {
          setOTPInput(value);
        }}
      />
      <Button title="submit" onPress={() => submitOTP()} />
    </View>
  );
}
