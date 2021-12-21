import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    card_conteiner: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      car_text:{
        color: '#1A1F16',
        fontWeight: 'bold',
      },
      card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#71ACD6', 
        padding: 10,
        backgroundColor: '#fff',
      },
      card_content: {
        marginTop: 15,
      }

});

export default style;