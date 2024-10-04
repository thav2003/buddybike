import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

import tw from "twrnc";
import { router } from "expo-router";
import { COLORS, FONT, SHADOWS, SIZES } from "@/constants/Colors";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { AUTH_TYPES } from "@/constants/Config";
import GoogleButton from "@/components/google/GoogleButton";
import Ionicons from "@expo/vector-icons/Ionicons";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>();

  const handlesubmit = () => {
    router.push("/(tabs)");

    // const newErrors = { email: "", password: "" }; // Tạo một object mới để lưu trữ lỗi

    // if (email.length < 4 || !email.includes("@")) {
    //   newErrors.email = "Invalid email address";
    // }

    // if (password.length < 1) {
    //   newErrors.password = "Password cannot be empty";
    // } else if (password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters";
    // }
    // setErrors(newErrors);
    // if (!newErrors.email && !newErrors.password) {
    //   router.push("/(tabs)");
    // }
  };

  return (
    <View style={{ width: "100%" }}>
      <View style={{ margin: SIZES.small, gap: 0, justifyContent: "center" }}>
        <Input
          // labelTitle="Enter Your Email Address"
          value={email}
          onTextChange={(text) => setEmail(text)}
          setInputErrorMessage={errors?.email}
          placeholder="eg. example@gmail.com"
          style={{ color: COLORS.secondary }}
          placeholderTextColor={COLORS.secondary}
          selectionColor={COLORS.secondary}
          type="email"
          prefixIcon={
            <Ionicons name={"person"} size={23} color={COLORS.secondary} />
          }
        />
        <Input
          prefixIcon={
            <Ionicons name={"lock-closed"} size={23} color={COLORS.secondary} />
          }
          style={{ color: COLORS.secondary }}
          selectionColor={COLORS.secondary}
          // labelTitle="Enter Your Password"
          value={password}
          color={COLORS.secondary}
          onTextChange={(text) => setPassword(text)}
          setInputErrorMessage={errors?.password}
          placeholder="eg. ********"
          placeholderTextColor={COLORS.secondary}
          type="password"
        />
        <View style={[tw`px-15 rounded-lg `]}>
          <Button onPress={handlesubmit} variant="secondary">
            Xác nhận
          </Button>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Text
              style={[
                tw`text-sm mx-1`,
                { fontFamily: FONT.medium, color: COLORS.secondary },
              ]}
            >
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[tw`text-sm`, { fontFamily: FONT.medium, color: COLORS.gray }]}
        >
          Chưa có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text
            style={[
              tw`text-sm mx-1`,
              { fontFamily: FONT.medium, color: COLORS.primary },
            ]}
          >
            Đăng kí ngay
          </Text>
        </TouchableOpacity>
      </View> */}
      {AUTH_TYPES.GOOGLE_PROVIDER && (
        <View>
          {/* <View
            style={[
              tw`my-4 mx-6`,
              {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <View
              style={[
                tw`flex-1`,
                { height: 1, backgroundColor: COLORS.gray2, opacity: 0.8 },
              ]}
            ></View>
            <Text
              style={[
                tw`text-center my-2 mx-3`,
                { fontFamily: FONT.medium, color: COLORS.gray },
              ]}
            >
              Hoặc
            </Text>
            <View
              style={[
                tw`flex-1`,
                { height: 1, backgroundColor: COLORS.gray2, opacity: 0.8 },
              ]}
            ></View>
          </View> */}
          <View style={[tw`flex-row justify-center items-center`, { gap: 40 }]}>
            <GoogleButton />
            <TouchableOpacity onPress={() => console.log("test")}>
              <Image
                source={require("../../assets/icons/face-id.png")}
                // style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default LoginForm;
