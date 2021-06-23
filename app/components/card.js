import React from 'react';
import { StyleSheet, Image, Dimensions, } from 'react-native';

const { width } = Dimensions.get('window');

const imageRatio  = 206 / 338;
const cardWidth = width*.7;
const cardHight = cardWidth * imageRatio;

const cardsImages = {
    card01: require('../../assets/cards/card01.png'),
    card02: require('../../assets/cards/card02.png'),
    card03: require('../../assets/cards/card03.png'),
};

export default ({ type }) => (
    <Image style={styles.image} source={cardsImages[type]}/>
);

const styles = StyleSheet.create({
    image:{
        width: cardWidth,
        height: cardHight, 
    },
});