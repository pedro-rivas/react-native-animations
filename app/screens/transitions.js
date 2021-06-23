import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback, Dimensions } from "react-native";

import { useSpring } from "react-native-redash";

import AnimatedCard from '../components/animated-card';

const { width } = Dimensions.get('window');
const cards = ['card01', 'card02', 'card03'];

export default () => {

  const [toggled, setToggle] = useState(false);
  const transition = useSpring(toggled);

  return (
    <View style={styles.container}>

      {
        cards.map((card, index) => (
            <AnimatedCard key={card} {...{ index, card, transition }} />
        ))
      }

      <TouchableNativeFeedback onPress={()=> setToggle(!toggled)}>
          <View style={styles.btnGrap}>
              <Text style={styles.btnLabel}>{ !toggled ? 'Show cards' : 'Hide cards'}</Text>
          </View>
      </TouchableNativeFeedback>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      padding:20,
      backgroundColor:'white'
    },
    btnGrap:{
        height:60,
        borderRadius:30,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width: width-40,
        borderColor:'#12aaab',
        borderWidth:2,
    },
    btnLabel:{
        fontSize:16,
        color:'#12aaab',
        fontWeight:'700',
    }

  });