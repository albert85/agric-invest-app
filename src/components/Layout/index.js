import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Content,
} from 'native-base';
import layoutStyle from './style';

export default class Layout extends Component {
  openDrawer = () => {
    return this.props.navigation.openDrawer();
  };
  closeDrawer = () => {
    console.log('I am pressing it');
    return this.props.navigation.closeDrawer();
  };
  render() {
    return (
      <Container>
        <Header style={layoutStyle.headerStyle}>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>{this.props.children}</Content>
      </Container>
    );
  }
}
