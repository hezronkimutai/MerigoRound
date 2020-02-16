import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', data: '', side: 'none', button: 'block'};
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            width: '60%',
            height: '100%',
            backgroundColor: 'powderblue',
            display: this.state.side,
          }}>
          <TouchableOpacity
            style={{width: '100%', height: '100%'}}
            onPress={() =>
              this.setState({
                side: this.state.side === 'none' ? 'flex' : 'none',
                button: 'none',
              })
            }>
            <Text>Man</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{width: '100%', height: '100%', backgroundColor: 'skyblue'}}>
          <TouchableOpacity
            style={{width: '100%', height: '100%'}}
            onPress={() =>
              this.setState({
                side: this.state.side === 'none' ? 'flex' : 'none',
                button: 'none',
              })
            }>
            <View style={{width: '100%', height: '100%'}}>
              <Text>ManManManManManManMan ManManManManManManMan ManManMan ManManManManManMan </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  upper: {
    width: 50,
    height: '100%',
    backgroundColor: 'red',
  },
  lower: {
    height: '100%',
    width: 50,
    backgroundColor: 'blue',
  },
});
