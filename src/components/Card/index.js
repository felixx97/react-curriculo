import React from "react";
import {View, Text} from 'react-native';

import style from "./style";

const Card = ({titulo, children}) => {
    return(
        <View style={style.card_conteiner}>
        
            <View style={style.card}>
                <View style={style.card_header}>
                    <Text style={style.car_text}>{titulo}</Text>
                </View>
                <View style={style.card_content}>
                   {children}
            </View>
            </View>

        </View>
    )

}

export default Card