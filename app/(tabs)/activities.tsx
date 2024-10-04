import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import tw from "twrnc";
import { SafeAreaView } from "react-native";
import { useState } from "react";

export default function ActivitiesScreen() {
  const [headerContentHeight, setHeaderContentHeight] = useState(0);

  const handleHeaderLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setHeaderContentHeight(height);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <SafeAreaView>
        <ImageBackground
          source={require("@/assets/header-bg.png")} // Replace with your image path
          style={[
            styles.headerContainer,
            {
              paddingTop:
                Platform.OS === "android" ? StatusBar.currentHeight + 30 : 30,
            },
          ]}
          imageStyle={styles.imageBackground} // Custom style for the image
        >
          <View style={styles.headerContent} onLayout={handleHeaderLayout}>
            <Text style={styles.greetingText}>Hoạt động</Text>
          </View>
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={24} />
            <TextInput
              style={styles.searchInput}
              placeholder="Bạn ơi, mình đi đâu thế?"
            />
          </View>
        </ImageBackground>
      </SafeAreaView>

      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    height: 240,
    overflow: "hidden",
  },
  imageBackground: {
    resizeMode: "cover",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  badgeContainer: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    width: 80,
    height: 32,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333", // Darker color for the input text
  },
});
