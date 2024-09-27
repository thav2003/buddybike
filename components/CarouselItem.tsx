import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageSourcePropType,
} from "react-native";
import React from "react";

import tw from "twrnc";
import { SIZES, FONT, COLORS } from "@/constants/Colors";

interface Props {
  item: {
    image: ImageSourcePropType;
    title: string;
    description: string;
  };
}

const CarouselItem = ({ item }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{ width, justifyContent: "center", flex: 1, alignItems: "center" }}
    >
      <View style={{ flex: 0.7 }}>
        <Image
          source={item.image}
          style={[{ width: width - 50, flex: 0.85, resizeMode: "contain" }]}
        />
      </View>
      <Text
        numberOfLines={2}
        style={[
          tw`mx-4 px-6`,
          {
            fontSize: SIZES.xxLarge,
            fontFamily: FONT.extraBold,
            textAlign: "center",
            color: COLORS.primary,
          },
        ]}
      >
        {item.title}
      </Text>
      <Text
        style={[
          tw`mx-6 mt-1`,
          { fontSize: SIZES.medium, color: COLORS.gray, textAlign: "center" },
        ]}
      >
        {item.description}
      </Text>
    </View>
  );
};

export default CarouselItem;
