import { COLORS, SHADOWS, FONT } from "@/constants/Colors";
import { googleLogin } from "@/libs/google";
import { Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
const GoogleButton = () => {
  return (
    <TouchableOpacity onPress={googleLogin}>
      <Image
        source={require("../../assets/icons/google.png")}
        // style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );
};

export default GoogleButton;
