import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

import { menuItems } from '../config';

import { useNavigation } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();

    return(
        <View style={styles.mainGrap}>
            <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'}/>
            <ScrollView
                style={{ paddingVertical:40, paddingHorizontal:20,  }}
            >
                <Text style={styles.title}>{`React Native Animation Examples`}</Text>
                {
                    menuItems.map((item, i) => (
                        <TouchableOpacity key={i} onPress={()=> navigation.navigate(item.screen)}>
                            <View style={styles.btnGrap}>
                                <View style={styles.point}/>
                                <Text style={styles.btnLabel}>{`${item.title}`}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    mainGrap:{
        flex:1,
        backgroundColor:'#12aaab',
    },  
    title:{
        fontSize:30,
        lineHeight:36,
        fontWeight:'700',
        color:'white',
        marginVertical:20,
    },
    btnGrap:{
        padding:20,
        flexDirection:'row',
        alignItems:'center', 
    },
    btnLabel:{
        fontSize:16,
        fontWeight:'700',
        color:'white',
        borderBottomColor:'white',
        borderBottomWidth:2,
    },
    point:{
        width:8,
        height:8,
        borderRadius:5,
        backgroundColor:'white',
        marginRight:10, 
    }
});
