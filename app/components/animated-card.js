import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix } from "react-native-redash";

import Card from './card';

const { width } = Dimensions.get("window");
const cardSpaceBetween = width/8;
const origin = -(width / 2 - cardSpaceBetween * 2);

export default ({ card, transition, index }) => {

  const style = useAnimatedStyle(() => {

    const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);
   
    return {
      transform: [
        { translateX: origin },
        { rotate: `${rotate}rad` },
        { translateX: -origin },
      ],
    };

  });

  return (
    <Animated.View key={card} style={[styles.overlay, style]}>
      <Card type={card} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      padding: cardSpaceBetween * 4,
    },
});