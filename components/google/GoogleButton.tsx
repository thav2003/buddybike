import { COLORS, SHADOWS, FONT } from "@/constants/Colors";
import { googleLogin } from "@/libs/google";
import { Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
const GoogleButton = () => {
  return (
    <TouchableOpacity
      onPress={googleLogin}
      style={[
        tw`flex-row p-2 rounded-xl flex-1 mx-6 justify-center items-center`,
        {
          borderWidth: 1,
          backgroundColor: COLORS.white2,
          gap: 6,
          borderColor: COLORS.gray2,
        },
        SHADOWS.small,
      ]}
    >
      <Image
        source={require("../../assets/GoogleLogo.png")}
        style={{ width: 20, height: 20 }}
      />
      <Text
        style={[tw`text-center my-2 font-semibold`, { color: COLORS.tertiary }]}
      >
        Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;
