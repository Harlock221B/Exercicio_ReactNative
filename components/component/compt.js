import React, { Component } from 'react';
import { Text } from 'react-native';
import Estilos from './styles.js'

export default function (props) {
    cor=props.cor;
    return (
        <Text style={Estilos.textoCurso}>Curso Técnico de {props.curso}</Text>
    );
}
