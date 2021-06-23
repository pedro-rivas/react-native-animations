import React from "react";
import { View } from "react-native";

import Animated from "react-native-reanimated";

export default ({ color, ratio }) => {
  return (
    <View
      style={{
        width: ratio * 2,
        height: ratio,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: color,
          width: ratio * 2,
          height: ratio * 2,
          borderRadius: ratio,
        }}
      />
    </View>
  );
};