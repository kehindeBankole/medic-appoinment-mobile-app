import { StatusBar, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { Children } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";
import { s, vs, ms, mvs } from "react-native-size-matters";

export default function Container(props: { children: any }) {
  const { children } = props;
  const offset = useSharedValue(0);
  const isFocused = useIsFocused();
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value,
    };
  });
  React.useEffect(() => {
    offset.value =
      isFocused === true
        ? withTiming(1, {
            duration: 300,
          })
        : 0;
  }, [isFocused]);

  return (
    <Animated.View
      style={[
        animatedStyles,
        {
          flex: 1,
          backgroundColor: "white",
          opacity: isFocused === true ? 0 : 1,
          // paddingHorizontal: ms(28),
        },
      ]}
    >
      <StatusBar />
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
