import React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/abraao.jpeg'

const App = () => {
  return (
    <>
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto}/>
        <Text style={style.nome}>Abraão Félix</Text>
        <Text style={style.funcao}>Desenvolvedor Mobile</Text>
        <View style={style.midiaSocial}>
          <Icon name="github" size={20}/>
          <Icon name="instagram" size={20}/>
          <Icon name="twitter" size={20}/>
          <Icon name="linkedin" size={20}/>
        </View>
      </View>
    </View>
    </>
  );
};

const style = StyleSheet.create({

  page: {
    backgroundColor: '#3581B8',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 25,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#04A682',
    marginBottom: 10
  },
  midiaSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  }
})

export default App;