import { View, Text, Image, SafeAreaView, Button, Icon } from "@/components";
import { width } from "@/constants";
import { Onboard } from "@/constants";
import { IconsEnum } from "@/types";
import { useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";


export default function SplashScreen() {
  const flatListRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onNext = () => {
    flatListRef?.current?.scrollToOffset({
      offset: 1 * width,
    });
  };

  return (
    <Animated.FlatList
      ref={flatListRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      data={
        Onboard.map((item) => {
          return <Slider {...item} onNext={onNext()} />;
        }
        )}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({ item }) => (
        <View style={{ width: width }}>{item}</View>
      )}
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    />
  );
}

function Slider({ title, image, id, onNext }: {
  id: number,
  title: string,
  description: string,
  image: string,
  onNext: void
}) {
  return (
    <SafeAreaView style={{ flex: 1, }}
      lightColor="#fafbfa"
      darkColor="#111619"
    >
      <View
        style={{
          width,
          ...styles.container
        }}
        lightColor="#fafbfa"
        darkColor="#111619"
      >
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
          <Image source={image} style={{ width: width, height: 350, }}
            transition={1000}
          />
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 40,
            flex: 1,
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            paddingVertical: 30,
            paddingHorizontal: 10,
          }}
          lightColor="#ffff"
          darkColor="#000"
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            {Array.from({ length: 3 }).map((_, index) => {
              const isActive = index + 1 === id;

              return (
                <View
                  key={index}
                  style={{
                    width: isActive ? 70 : 30,
                    height: 4,
                    borderRadius: 5,
                    backgroundColor: id === index + 1 ? "#38bdcf" : "#edecef",
                    marginHorizontal: 5,
                    flexDirection: "column",

                  }}
                />
              );
            }
            )}
          </View>

          <Text type="title" style={{ textAlign: "center", }}>{title}</Text>
          <Text style={{ textAlign: "center", fontSize: 16, color: "#7c7c7c" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text
          >
          <View
            style={{
              gap: 10,
              flexDirection: 'row'
            }}
          >
            <Button
              title="Skip"
              color="secondary"
            />
            <Button
              onPress={() => { onNext }}
              title="Next"
              color="primary"


            >
              <Icon
                type={IconsEnum.feather}
                name="arrow-right-circle"
                style={{
                  marginLeft: 10,

                }}
                lightColor="#fff"
                size={20}
              />
            </Button>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
})