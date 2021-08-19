import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Estilos from './components/component/styles.js';
import Caixas from './components/caixas/index';

export default function App1() {
  return (
    <View style={Estilos.container}>
      <Caixas></Caixas>
      <Text style={Estilo.textoPadrao}>TURMA DA BOSCH</Text>
      <Text style={Estilo.textoTitulo}>SENAI-SP</Text>
    </View>
  );
};