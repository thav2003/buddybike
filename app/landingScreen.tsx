import CarouselItem from "@/components/CarouselItem";
import Paginator from "@/components/Paginator";
import { COLORS, SIZES } from "@/constants/Colors";
import { Stack, router } from "expo-router";
import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Animated,
  FlatList,
  StatusBar,
  ImageSourcePropType,
  ViewToken,
} from "react-native";
import Button from "@/components/ui/Button";
import { useFocusEffect } from "@react-navigation/native";

interface TestData {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export default function LandingScreen() {
  const carouselsData: TestData[] = [
    {
      id: 1,
      title: "Best Prices & Deals",
      description: "Get your laundry done at the best prices and deals",
      image: require("../assets/images/Carousel1.png"),
    },
    {
      id: 2,
      title: "Track your Orders",
      description: "Track your orders in realtime from the app",
      image: require("../assets/images/Carousel2.png"),
    },
    {
      id: 3,
      title: "Free & Fast \n Pickup & Delivery",
      description: "Free and fast delivery for all Orders.",
      image: require("../assets/images/Carousel3.png"),
    },
  ];
  const slidesRef = useRef<FlatList<TestData> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  useFocusEffect(
    useCallback(() => {
      let timer: NodeJS.Timeout | null = null;

      const startAutoScroll = () => {
        timer = setInterval(() => {
          if (currentIndex < carouselsData.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
          } else {
            slidesRef.current?.scrollToIndex({ index: 0 });
          }
        }, 3000);
      };

      const stopAutoScroll = () => {
        if (timer) {
          clearInterval(timer);
        }
      };

      startAutoScroll();

      return () => {
        stopAutoScroll();
      };
    }, [currentIndex])
  );
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <View
          style={{
            backgroundColor: COLORS.lightWhite,
            height: "70%",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flex: 3,
              // margin: SIZES.medium
            }}
          >
            <FlatList
              data={carouselsData}
              renderItem={({ item }) => <CarouselItem item={item} />}
              bounces={false}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              pagingEnabled
              scrollEnabled
              scrollEventThrottle={32}
              viewabilityConfig={viewConfig}
              onViewableItemsChanged={viewableItemsChanged}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              ref={slidesRef}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Paginator data={carouselsData} scrollX={scrollX} />
        </View>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: "30%",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <View style={{ margin: SIZES.medium }}>
            <Button onPress={() => router.push("/login")} variant="default">
              Đăng nhập
            </Button>
            <Button
              onPress={() => router.push("/register")}
              variant="secondary"
            >
              Đăng kí
            </Button>
          </View>
        </View>
      </View>

      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
