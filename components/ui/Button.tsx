import { COLORS, FONT, SIZES } from "@/constants/Colors";
import React, { ReactNode, useState } from "react";
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import tw from "twrnc";

interface Props extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "default";
  onPress?: (event: GestureResponderEvent) => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ variant, onPress, children, ...props }: Props) => {
  const [buttonStyle, setButtonStyle] = useState(() => {
    switch (variant) {
      case "primary":
        return [
          tw`py-4 my-2 rounded-xl`,
          { backgroundColor: COLORS.primary },
          props.style,
        ];
      case "secondary":
        return [
          tw`py-4 my-2 rounded-xl`,
          { backgroundColor: COLORS.tertiary },
          props.style,
        ];
      default:
        return [
          tw`py-4 my-2 rounded-xl`,
          { backgroundColor: COLORS.white },
          props.style,
        ];
    }
  });

  const [textStyle, setTextStyle] = useState(() => {
    switch (variant) {
      case "primary":
        return [
          tw`text-center `,
          {
            color: COLORS.white,
            fontFamily: FONT.semiBold,
            fontSize: SIZES.medium,
          },
          props.style,
        ];
      case "secondary":
        return [
          tw`text-center `,
          {
            color: COLORS.white,
            fontFamily: FONT.semiBold,
            fontSize: SIZES.medium,
          },
          props.style,
        ];
      default:
        return [
          tw`text-center `,
          {
            color: COLORS.black,
            fontFamily: FONT.semiBold,
            fontSize: SIZES.medium,
          },
          props.style,
        ];
    }
  });

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} {...props}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
