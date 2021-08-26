import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Estilos from '../styles/style.js';

export default function(props){
    return(
        <Text style={Estilos.textoCursos}>Curso Técnico de {props.curso}</Text>
    );
}