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
  const registeredEmail = "kingarsh175@gmail.com"; //dummy email for login
  const registeredPassword = "123456"; //dummy password

  const handlesubmit = () => {
    const newErrors = { email: "", password: "" }; // Tạo một object mới để lưu trữ lỗi
    // Kiểm tra email
    if (email.length < 4 || !email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    // Kiểm tra password
    if (password.length < 1) {
      newErrors.password = "Password cannot be empty";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    // if (email !== registeredEmail || password !== registeredPassword) {
    //   newErrors.password = "Invalid email or password"; // Cập nhật thông báo lỗi
    // }
    setErrors(newErrors);
    if (!newErrors.email && !newErrors.password) {
      alert("Login successful");
      // router.push("/register");
    }
  };

  return (
    <View style={{ width: "100%" }}>
      <View style={{ margin: SIZES.small, gap: 8, justifyContent: "center" }}>
        <Input
          // labelTitle="Enter Your Email Address"
          value={email}
          onTextChange={(text) => setEmail(text)}
          setInputErrorMessage={errors?.email}
          placeholder="eg. example@gmail.com"
          type="email"
          prefixIcon={
            <Ionicons name={"person"} size={23} color={COLORS.gray} />
          }
        />
        <Input
          prefixIcon={
            <Ionicons name={"lock-closed"} size={23} color={COLORS.gray} />
          }
          // labelTitle="Enter Your Password"
          value={password}
          onTextChange={(text) => setPassword(text)}
          setInputErrorMessage={errors?.password}
          placeholder="eg. ********"
          type="password"
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Text
              style={[
                tw`text-sm mx-1`,
                { fontFamily: FONT.medium, color: COLORS.primary },
              ]}
            >
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        </View>
        <Button onPress={handlesubmit} variant="primary">
          Đăng nhập
        </Button>
      </View>
      <View
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
      </View>
      {AUTH_TYPES.GOOGLE_PROVIDER && (
        <View>
          <View
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
          </View>
          <View style={[tw`flex-row justify-center items-center`, { gap: 0 }]}>
            <GoogleButton />
          </View>
        </View>
      )}
    </View>
  );
};

export default LoginForm;
