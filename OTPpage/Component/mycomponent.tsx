import styled from "styled-components/native";
import { colors } from "./colors";


export const OTPInputSection = styled.View`
justify-content:center;
align-items:center;
margin-vertical:30px;
`;
export const HiddenTextInput = styled.TextInput`
  border-color: ${colors.secondary};
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
  margin-top: 15px;  // Add "px" unit here
  width: 300px;
  color: ${colors.white};
`;

