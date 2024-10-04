import React, { useEffect, useState } from "react";
import { Text, View, TextInputProps } from "react-native";
import * as Haptics from "expo-haptics";
import tw from "twrnc";
import { FONT, COLORS, SIZES } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Input as TextInput } from "@rneui/themed";
import { IconNode } from "@rneui/base";

type InputType = "text" | "email" | "password" | "phone" | "numeric";
type KeyboardTypeOptions =
  | "default"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "url"
  | "number-pad"
  | "decimal-pad";
interface Props extends TextInputProps {
  type: InputType;
  onTextChange: (text: string) => void;
  setInputErrorMessage?: string;
  labelTitle?: string;
  value?: string;
  onFocus?: () => void;
  onKeyPress?: () => void;
  onBlur?: () => void;
  style?: any;
  prefixIcon?: IconNode;
  color?: string;
}
const Input = ({
  type,
  onTextChange,
  setInputErrorMessage,
  labelTitle,
  prefixIcon,
  color,
  ...props
}: Props) => {
  const [value, setValue] = useState(props.value ? props.value : "");
  const [errorMessage, setErrorMessage] = useState(
    setInputErrorMessage ? setInputErrorMessage : ""
  );
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    if (type === "phone") {
      setErrorMessage(setInputErrorMessage ? setInputErrorMessage : "");
    } else if (type === "email") {
      setErrorMessage(setInputErrorMessage ? setInputErrorMessage : "");
    } else if (type === "password") {
      setErrorMessage(setInputErrorMessage ? setInputErrorMessage : "");
    }
  }, [value, setInputErrorMessage]);

  let keyboardType: KeyboardTypeOptions = "default";

  if (type === "numeric") {
    keyboardType = "numeric";
  }

  if (type === "email") {
    keyboardType = "email-address";
  }

  if (type === "phone") {
    keyboardType = "phone-pad";
  }

  const hapticFeedback = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <TextInput
        label={labelTitle}
        rightIcon={
          type === "password" ? (
            <Ionicons
              name={showPassword ? "eye-off" : "eye"} // Use the appropriate icon based on the visibility state
              onPress={() => setShowPassword(!showPassword)}
              // style={[tw`absolute right-4 top-4`]}
              size={23}
              color={color ? color : COLORS.primary}
            />
          ) : (
            <View></View>
          )
        }
        leftIcon={prefixIcon ? prefixIcon : <View></View>}
        placeholderTextColor={COLORS.gray2}
        onFocus={() => {
          props.onFocus && props.onFocus();
        }}
        keyboardAppearance="light"
        onKeyPress={() => {
          props.onKeyPress && props.onKeyPress();
          hapticFeedback();
        }}
        secureTextEntry={type === "password" && showPassword ? true : false}
        selectionColor={COLORS.primary}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          onTextChange && onTextChange(text);
        }}
        onBlur={() => {
          props.onBlur && props.onBlur();
        }}
        inputContainerStyle={[
          tw`px-4 rounded-lg `,
          {
            borderRadius: 12,
            fontSize: 16,
            borderColor: COLORS.gray2,
            borderWidth: 1,
            backgroundColor: COLORS.white,
          },
          props.style,
        ]}
        errorMessage={errorMessage}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

export default Input;
