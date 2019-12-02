import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';

const Card = ({cardBorderColor, textBorderColor, circleColor, cardTitle}) => {
  return (
    <TouchableOpacity style={style.parentLayout}>
      <View style={style[`${cardBorderColor}`]} />
      <View style={{width: '95%'}}>
        <Text style={style[`${textBorderColor}`]}>{cardTitle}</Text>
        <View>
          <View style={style[`${circleColor}`]}>
            <View style={style.roundRectangle} />
          </View>
        </View>
        <Text style={style.amount}>1,090,000</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
