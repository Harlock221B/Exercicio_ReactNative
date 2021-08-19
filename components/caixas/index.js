import React from 'react';
import { View } from 'react-native';

export default function(){
    return(
        <View style={{width:'100%', height:'90%', flexDirection:'row',justifyConten:'space-evely' }}>
                <View style={{width:50,height:50,backgroundColor:'#00B0F0'}}></View>
                <View style={{width:50,height:50,backgroundColor:'#A9D08E'}}></View>
                <View style={{width:50,height:50,backgroundColor:'#F4B084'}}></View>
        </View>
    )
}