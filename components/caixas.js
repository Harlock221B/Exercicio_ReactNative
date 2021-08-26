import React from 'react';
import { View } from 'react-native';

export default function(props){
    return(
        <View style={{width: '100%', height: 300, flexDirection: 'column', justifyContent: 'center', alignItems:'stretch'}}>
            {
                props.exibir ?
                <View style={{flex:1}}>
                    <View style={{flexGrow:1,backgroundColor:'#00B0F0'}}></View>
                    <View style={{flexGrow:1,backgroundColor:'#0066FF'}}></View>
                    <View style={{flexGrow:1,backgroundColor:'#0000FF'}}></View>
                </View>
                :
                <View style={{flex:1}}>
                    <View style={{flexGrow:1,backgroundColor:'#FF6600'}}></View>
                    <View style={{flexGrow:1,backgroundColor:'#D62900'}}></View>
                    <View style={{flexGrow:1,backgroundColor:'#FF0000'}}></View>
                </View>
            }
        </View>
    );
}