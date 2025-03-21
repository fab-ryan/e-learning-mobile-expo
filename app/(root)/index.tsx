import { View, Text } from "@/components";
import { width } from "@/constants";
import { useRef } from "react";
import { Animated } from "react-native";
export default function SplashScreen() {
  const flatListRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onNext = () => {
    flatListRef?.current?.scrollToOffset({
      offset: 1 * width,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      lightColor="#ecedef"
      darkColor="#111718"
    >

    </View>
  );
}
