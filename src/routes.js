import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './screens/Dashboard';
import Investment from './screens/Investments';
import Trades from './screens/Trades';
import Wallets from './screens/Wallets';
import SideBar from './components/Sidebar';

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Dashboard',
      },
    },
    Investment: {screen: Investment},
    Trades: {screen: Trades},
    Wallets: {screen: Wallets},
  },
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    contentComponent: props => <SideBar {...props} />,
    hideStatusBar: true,
  },
);

const App = createAppContainer(MainNavigator);

export default App;
