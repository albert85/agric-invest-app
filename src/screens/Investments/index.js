import React, {Component} from 'react';
import {Text} from 'react-native';
import Layout from '../../components/Layout';

export default class Investments extends Component {
  openDrawer = () => {
    return this.props.navigation.openDrawer();
  };
  render() {
    return (
      <Layout title="Investments" {...this.props}>
        <Text> This is Investments page </Text>
      </Layout>
    );
  }
}
