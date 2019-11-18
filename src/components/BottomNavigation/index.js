import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Dashboard from '../../screens/Dashboard';
import Investments from '../../screens/Investments';
import Trade from '../../screens/Trades';

export default class MyComponent extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    index: 0,
    routes: [
      {key: 'dashboard', title: 'Dashboard', icon: 'view-dashboard-outline'},
      {key: 'investment', title: 'Investment', icon: 'square-inc-cash'},
      {key: 'trade', title: 'Trade', icon: 'history'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    investment: Investments,
    trade: Trade,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
