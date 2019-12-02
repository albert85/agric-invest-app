/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';

import Layout from '../../components/Layout';
import style from './style';
import Card from '../../components/Card';

class App extends React.Component {
  openDrawer = () => {
    return this.props.navigation.openDrawer();
  };

  getCardDetails = cardTitle => {
    switch (cardTitle) {
      case 'Total Wallet':
        return {
          cardBorderColor: 'blueColor',
          textBorderColor: 'blueText',
          circleColor: 'roundCircleBlue',
        };
      case 'On-going Investment':
        return {
          cardBorderColor: 'orangeColor',
          textBorderColor: 'orangeText',
          circleColor: 'roundCircleOrange',
        };
      case 'Commission':
        return {
          cardBorderColor: 'greenColor',
          textBorderColor: 'greenText',
          circleColor: 'roundCircleGreen',
        };
      case 'Investment Wallet':
        return {
          cardBorderColor: 'greenColor',
          textBorderColor: 'greenText',
          circleColor: 'roundCircleGreen',
        };
      case 'Cash-Out Investment':
        return {
          cardBorderColor: 'greenColor',
          textBorderColor: 'greenText',
          circleColor: 'roundCircleGreen',
        };
      case 'Trade Investment':
        return {
          cardBorderColor: 'blueColor',
          textBorderColor: 'blueText',
          circleColor: 'roundCircleBlue',
        };
      case 'Mature Investment':
        return {
          cardBorderColor: 'greenColor',
          textBorderColor: 'greenText',
          circleColor: 'roundCircleGreen',
        };
      default:
        return {
          cardBorderColor: 'redColor',
          textBorderColor: 'redText',
          circleColor: 'roundCircleRed',
        };
    }
  };
  render() {
    const cardTitle = [
      'Total Wallet',
      'Investment Wallet',
      'Trade Investment',
      'Mature Investment',
      'Cash-Out Investment',
      'On-going Investment',
      'Cancelled Investment',
      'Commission',
    ];
    return (
      <Layout title="AGRICTRADEVEST" {...this.props} style={style.container}>
        {cardTitle.map((card, index) => {
          console.log('son', this.getCardDetails(card.cardBorderColor));
          return (
            <Card
              key={index}
              cardBorderColor={`${this.getCardDetails(card).cardBorderColor}`}
              textBorderColor={`${this.getCardDetails(card).textBorderColor}`}
              circleColor={`${this.getCardDetails(card).circleColor}`}
              cardTitle={card}
            />
          );
        })}
      </Layout>
    );
  }
}

export default App;
