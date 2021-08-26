import React from 'react';
import Estilos from '../styles/style.js'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const produtos = [
    {
        id: '001',
        desc: ['Mouse', '24.00']
    },
    {
        id: '002',
        desc: ['Teclado', '50.00']
    },
    {
        id: '003',
        desc: ['Monitor', '500.00']
    },
]

export default function () {
    return (
        <View>
            <FlatList
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={Estilos.item}>
                        <Text style={Estilos.prod}>
                            Descrição: {item.desc[0]} - valor {item.desc[1]}
                        </Text>
                    </View>}
            />
        </View>
    );
};