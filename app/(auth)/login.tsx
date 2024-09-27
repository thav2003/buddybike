import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  ImageBackground,
} from "react-native";
import * as Haptics from "expo-haptics";
import { COLORS, FONT, SIZES } from "@/constants/Colors";
import { Stack } from "expo-router";
import React, { useState } from "react";
import tw from "twrnc";
import LoginForm from "@/components/form/Login";
import { Button } from "@rneui/base";
import * as LocalAuthentication from "expo-local-authentication";
import Input from "@/components/ui/Input";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const alertComponent = (
    title: string,
    mess?: string,
    btnTxt?: string,
    btnFunc?: () => void
  ) => {
    return Alert.alert(title, mess, [{ text: btnTxt, onPress: btnFunc }]);
  };
  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!isBiometricAvailable) {
      return alertComponent(
        "Please enter your password",
        "Biometric auth not supported",
        "ok"
      );
    }
    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    }
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();

    if (!savedBiometrics) {
      return alertComponent(
        "Biometric record not found 1",
        "Please login with your password",
        "OK"
      );
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login to BuddyBike dev app with biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });
    console.log(biometricAuth);
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",

          headerStyle: {
            backgroundColor: COLORS.white2,
          },
          headerLargeStyle: {
            backgroundColor: COLORS.white2,
          },

          headerTintColor: COLORS.tertiary,
          headerShadowVisible: false,
          headerBackVisible: true,
          gestureEnabled: false,
        }}
      />

      <SafeAreaView style={[tw`bg-white h-full`, { flex: 1 }]}>
        <ImageBackground
          source={require("../../assets/bg.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <KeyboardAvoidingView behavior="padding">
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.container}>
                {/* Put your stuff here, and it will be centered vertically. */}
                <Image
                  source={require("../../assets/logo-white.png")}
                  style={{ marginTop: 80 }}
                />
                <Text
                  style={[
                    tw`text-left text-white mx-4 font-extrabold text-5xl my-5`,
                  ]}
                >
                  Đăng nhập
                </Text>
                <LoginForm />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    // width: "100%",
    // maxWidth: 360,
    // alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
