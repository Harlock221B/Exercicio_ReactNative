import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import Estilos from './styles/style.js';
import Caixas from './components/caixas';
import Lista from './components/listaPlana';

const msg=()=>{
  Alert.alert('Titulo','Curso de React Native')
}

export default function App1() {
  let vexibir = false;
  return (
    <View style={Estilos.container}>
      <TouchableOpacity onpress={msg} style={Estilos.btn}>

      </TouchableOpacity>
      
      {vexibir ?
        <Image source={{ uri: 'https://th.bing.com/th/id/R.00ff86fc4a98c2ef9c099218657c031b?rik=BJpuHoKpFDYlWg&pid=ImgRaw&r=0' }} style={Estilos.logo} />
        :
        <Image source={require('./assets/logo.png')} style={Estilos.logo} />}
      <Caixas exibir={vexibir}></Caixas>
      <Lista></Lista>
      <Text style={Estilos.textoPadrao}>TURMA DA BOSCH</Text>
      <Text style={Estilos.textoTitulo}>SENAI-SP</Text>
      {vexibir ? <Text>Curso de React Native</Text> : <Text>########</Text>}
    </View>
  );
};