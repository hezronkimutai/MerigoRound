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
    <View style={styles.search}>
      <TextInput placeholder="Search" />
    </View>
    <View style={styles.divs}>
      <Text>Home</Text>
    </View>
    <View style={styles.divs}>
      <Text>Home</Text>
    </View>
    <View style={styles.dashboardBottom}>
      <View style={{width: '50%', height: '64%'}}>
        <View
          style={{
            backgroundColor: '#335068',
            width: '70%',
            height: '50%',
            borderRadius: 10,
            padding: 12,
          }}>
          <Text style={styles.textStyle}>Home</Text>
        </View>
      </View>
      <View style={{width: '50%', height: '64%'}}>
        <View
          style={{
            backgroundColor: '#335068',
            width: '70%',
            height: '50%',
            borderRadius: 10,
            padding: 12,
          }}>
          <Text style={styles.textStyle}>Hommmmme</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  search: {
    marginTop: 20,
    margin: 5,
    height: 60,
    backgroundColor: '#ffff',
    borderRadius: 15,
  },
  dashboardBottom: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    height: '14%',
  },
  divs: {
    marginTop: 15,
    margin: 5,
    backgroundColor: '#ffff',
    height: '30%',
    borderRadius:5,
  },
  icon: {padding: 0, margin: 0},
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  textStyle: {
    color: 'white',
  },
});
