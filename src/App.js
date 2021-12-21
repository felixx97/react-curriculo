import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/abraao.jpeg'
import Card from "./components/Card";


const App = () => {

  function hadleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu linkedin', 'https://www.linkedin.com/in/abra%C3%A3o-f%C3%A9lix-968b4a1a8/')
      break
      case 'twitter':
        Alert.alert('Meu Twitter', 'https://twitter.com/abrahammfelixx')
      break
      case 'instagram':
        Alert.alert('Meu instagram', 'https://www.instagram.com/abrahammfelixx/')
      break
      case 'github':
        Alert.alert('Meu github', 'https://github.com/felixx97')
      break
    }
  }


  return (
    <>
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto}/>
        <Text style={style.nome}>Abraão Félix</Text>
        <Text style={style.funcao}>Desenvolvedor Mobile</Text>
        <View style={style.midiaSocial}>
          <TouchableOpacity onPress={()=> hadleRedeSocial('github')}>
          <Icon name="github" size={20}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> hadleRedeSocial('instagram')}>
          <Icon name="instagram" size={20}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> hadleRedeSocial('twitter')}>
          <Icon name="twitter" size={20}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> hadleRedeSocial('linkedin')}>
          <Icon name="linkedin" size={20}/>
          </TouchableOpacity>
        </View>
      </View>

        <Card titulo="Formação Academica">
          <Text style={style.card_content_text}>Análise e Desen. de Sistemas</Text>
          <Text style={style.card_content_text}>Estácio de Sá</Text>
          <Text style={style.card_content_text}>4° semestre</Text>
        </Card>
        <Card titulo="Experiência Profissional">
          <Text style={style.card_content_text}>EasyApp</Text>
          <Text style={style.card_content_text}>Suporte Técnico</Text>
          <Text style={style.card_content_text}>Atualmente trabalhando</Text>
        </Card>

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
    width: 150,
    height: 150,
    borderRadius: 25,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#04A682',
    marginBottom: 10,
  },
  midiaSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 5,
  }
})

export default App;