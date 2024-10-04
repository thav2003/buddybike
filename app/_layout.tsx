// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import "react-native-reanimated";

// import { useColorScheme } from "@/hooks/useColorScheme";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }
import { getCurrentUser } from "@/libs/google";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Asset } from "expo-asset";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  StyleSheet,
  useColorScheme,
  View,
  ActivityIndicator,
} from "react-native";

interface AnimatedAppLoaderProps {
  children: React.ReactNode;
}

interface AnimatedSplashScreenProps {
  children: React.ReactNode;
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <AnimatedAppLoader>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AnimatedAppLoader>
  );
}

const AnimatedAppLoader: React.FC<AnimatedAppLoaderProps> = ({ children }) => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <AnimatedSplashScreen>{children}</AnimatedSplashScreen>;
};

const AnimatedSplashScreen: React.FC<AnimatedSplashScreenProps> = ({
  children,
}) => {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const router = useRouter();

  const fakeLoading = async (delay: number) => {
    return new Promise((resolve) => setTimeout(resolve, delay));
  };

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      // Load stuff
      await fakeLoading(3000);
      const isLoginGoogle = await getCurrentUser();
      console.log("Google login: " + isLoginGoogle);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, [router, isLoggedIn]);
  const handleImageLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setImageHeight(height);
  };

  useEffect(() => {
    if (isAppReady) {
      if (isLoggedIn) {
        router.push("/(tabs)");
      } else {
        router.push("/login");
      }
    }
  }, [isAppReady, isLoggedIn, router]);
  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <>
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: Constants?.expoConfig?.splash?.backgroundColor,
                opacity: animation,
              },
            ]}
          >
            <Animated.Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode:
                  Constants?.expoConfig?.splash?.resizeMode || "contain",
                transform: [
                  {
                    scale: animation,
                  },
                ],
              }}
              source={require("../assets/images/logo.png")}
              onLayout={handleImageLayout}
              onLoadEnd={onImageLoaded}
              fadeDuration={0}
            />
            {!isAppReady && (
              <ActivityIndicator
                size="large"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: imageHeight / 4,
                }}
              />
            )}
          </Animated.View>
        </>
      )}
    </View>
  );
};
