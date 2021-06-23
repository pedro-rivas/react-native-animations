import React from "react";
import { Dimensions, PixelRatio, StyleSheet, View } from "react-native";

import Animated, { Value, sub, add, cond, lessThan, } from "react-native-reanimated";
import { interpolateColor } from "react-native-redash";

//import Cursor from "../components/cursor";
import CircularProgress from "../components/circular-progress";

const { width } = Dimensions.get("window");
const { PI } = Math;
const size = width - 40;
const strokeWidth = 40;
const ratio = PixelRatio.roundToNearestPixel(size / 2);

export default () => {

  const start = new Value(0);
  const end = new Value(0);

  const theta = sub(
    cond(lessThan(start, end), end, add(end, PI * 2)),
    start
  );

  const backgroundColor = interpolateColor(theta, {
    inputRange: [0, PI, 2 * PI],
    outputRange: ["#ff3884", 'red', "#38ffb3"],
  });

  const rotate = sub(PI, end);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, transform: [{ rotate }] }}
        >
          <CircularProgress
            bg={'orange'}
            fg={backgroundColor}
            {...{ ratio, theta, strokeWidth, }}
          />
        </Animated.View>
        {/* <Cursor
          theta={start}
          strokeWidth={strokeWidth}
          r={ratio - strokeWidth / 2}
          {...{ backgroundColor }}
        />
        <Cursor
          theta={end}
          strokeWidth={strokeWidth}
          r={ratio - strokeWidth / 2}
          {...{ backgroundColor }}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      width: ratio * 2,
      height: ratio * 2,
    },
  });