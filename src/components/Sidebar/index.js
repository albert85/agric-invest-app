import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Icon,
} from 'native-base';
import style from './style';
import fontIcon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions} from 'react-navigation';

export default class SideBar extends Component {
  navigateToScreen = route => {
    const navigate = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigate);
    return this.props.navigation.closeDrawer();
  };
  render() {
    return (
      <Container>
        <Content>
          <View style={style.dashboardLayout}>
            <View style={style.userInitialContainer}>
              <Text style={style.userInitial}>UN</Text>
            </View>
            <Text style={style.userName}>User Name</Text>
            <Text style={style.userEmail}>useremailaddress@domain.com</Text>
          </View>
          {/* <DrawerItems></DrawerItems> */}
          {/* <DrawerNavigatorItems {...this.props} /> */}
          <List>
            <ListItem
              style={style.listBorder}
              onPress={() => this.navigateToScreen('Home')}>
              <Left>
                <Icon name="menu" />
                <Text>Dashboard</Text>
              </Left>
            </ListItem>
            <ListItem
              style={style.listBorder}
              onPress={() => this.navigateToScreen('Wallets')}>
              <Left>
                <Icon name="menu" />
                <Text>Wallet</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={style.listBorder}>
              <Left>
                <Icon name="menu" />
                <Text>Invest Now</Text>
              </Left>
            </ListItem>
            <ListItem
              style={style.listBorder}
              onPress={() => this.navigateToScreen('Investment')}>
              <Left>
                <Icon name="menu" />
                <Text>Wallet Report</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              style={style.listBorder}
              onPress={() => this.navigateToScreen('Investment')}>
              <Left>
                <Icon name="menu" />
                <Text>Investment Report</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              style={style.listBorder}
              onPress={() => this.navigateToScreen('Trades')}>
              <Left>
                <Icon name="menu" />
                <Text>Trading</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              style={style.listBorder}
              onPress={() => this.navigateToScreen('Investment')}>
              <Left>
                <Icon name="pen" />
                <Text>Start A Farm</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={style.listBorder}>
              <Left>
                <Icon name="person" />
                <Text>Contact</Text>
              </Left>
              <Right>
                <Icon name="currency" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
