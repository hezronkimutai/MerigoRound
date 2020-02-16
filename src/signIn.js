import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TextInput,
} from 'react-native';

export default () => (
  <View style={styles.container}>
    <View style={styles.inputFieldContainer}>
      <TextInput style={styles.inputField} placeholder="Email" />
    </View>
    <View style={styles.inputFieldContainer}>
      <TextInput style={styles.inputField} placeholder="Password" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  inputFieldContainer: {},
  inputField: {
    borderRadius: 2,
    margin: 20,
    backgroundColor: 'white',
  },
});
