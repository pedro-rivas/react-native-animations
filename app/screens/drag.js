import React from 'react';
import { View, Dimensions, } from 'react-native';

import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withDecay, } from "react-native-reanimated";
import { PanGestureHandler, } from "react-native-gesture-handler";
import { clamp, withBouncing } from "react-native-redash";

import Card from '../components/card';

const { width, height } = Dimensions.get('window');

export default () => {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const imageRatio  = 206 / 338;
  const boundX = width - (width*.7);
  const boundY = height - ((width*.7) * imageRatio);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: ({ velocityX, velocityY }) => {
      translateX.value = withBouncing(
        withDecay({
          velocity: velocityX,
        }),
        0,
        boundX
      );
      translateY.value = withBouncing(
        withDecay({
          velocity: velocityY,
        }),
        0,
        boundY
      );
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return(
    <View style={{ flex:1, backgroundColor:'white', }}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={{ ...animatedStyle }}>
          <Card type={'card01'}/>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};