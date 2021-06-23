import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, } from '@react-navigation/stack';

import Home from './app/screens/home';
import PanGesture from './app/screens/drag';
import Transitions from './app/screens/transitions';
import CircularSlider from './app/screens/circular-slider';
import Swiping from './app/screens/swiping';
import InteractiveGraph from './app/screens/interactive-graph';
import DragSort from './app/screens/drag-to-sort';
import ShapeMorphing from './app/screens/shape-morphing';

const Stack = createStackNavigator();

const horizontalTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
}

export default () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"  component={Home} options={{ header: ()=> null, }}/>
        <Stack.Screen name="Pan_Gesture"  component={PanGesture} options={{...horizontalTransition, title: 'Drag Gesture',}} />
        <Stack.Screen name="Transitions"  component={Transitions} options={{...horizontalTransition, title: 'Transitions',}} />
        <Stack.Screen name="Circular_Slider"  component={CircularSlider} options={{...horizontalTransition, title: 'Circular Slider',}} />
        <Stack.Screen name="Swiping"  component={Swiping} options={{...horizontalTransition, title: 'Swiping',}} />
        <Stack.Screen name="Interactive_Graph"  component={InteractiveGraph} options={{...horizontalTransition, title: 'Interactive Graph',}} />
        <Stack.Screen name="Drag_Sort"  component={DragSort} options={{...horizontalTransition, title: 'Drag & Sort',}} />
        <Stack.Screen name="Shape_Morphing"  component={ShapeMorphing} options={{...horizontalTransition, title: 'Shape Morphing',}} />
       
      </Stack.Navigator>
    </NavigationContainer>
);