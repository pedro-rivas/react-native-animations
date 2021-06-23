import React from "react";
import { StyleSheet, View } from "react-native";

import Animated from "react-native-reanimated";
import { transformOrigin } from "react-native-redash";

import HalfCircle from "./half-circle";

const { PI } = Math;
const { lessThan, interpolate, Extrapolate } = Animated;

export default ({ bg, fg, strokeWidth, ratio, theta,  }) => {

  const opacity = lessThan(theta, PI);

  const rotate = interpolate(theta, {
    inputRange: [PI, 2 * PI],
    outputRange: [0, PI],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <View style={{ zIndex: 1 }}>
        <HalfCircle color={fg} {...{ ratio }} />
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin({ x: 0, y: ratio / 2 }, { rotate: theta }),
            opacity,
          }}
        >
          <HalfCircle color={bg} {...{ ratio }} />
        </Animated.View>
      </View>
      <View style={{ transform: [{ rotate: "180deg" }] }}>
        <HalfCircle color={fg} {...{ ratio }} />
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin({ x: 0, y: ratio / 2 }, { rotate }),
          }}
        >
          <HalfCircle color={bg} {...{ ratio }} />
        </Animated.View>
      </View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: (ratio - strokeWidth) * 2,
            height: (ratio - strokeWidth) * 2,
            borderRadius: ratio - strokeWidth,
          }}
        />
      </View>
    </>
  );
};