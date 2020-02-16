import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NativeRouter, Route, Link} from 'react-router-native';
import Members from './Members';
import Topics from './Topics';
import Home from './Home';
import Signin from './signIn';
import Signup from './signUp';

const Topic = ({match}) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);
const storeData = async () => {
  try {
    await AsyncStorage.setItem('@storage_Key', 'stored value=== This is the token that ');
  } catch (e) {
    console.log('===>>>', e);
  }
};
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      console.log('Null');
    }
    console.log('=======_______++++', value);
  } catch (e) {
    console.log('===>>>', e);
  }
};
storeData();
getData();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', data: '', side: 'none', button: 'block'};
  }

  render() {
    const handleToggleSideDrawer = () => {
      this.setState({
        side: this.state.side === 'none' ? 'flex' : 'none',
        button: 'none',
      });
    };
    return (
      <NativeRouter style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => handleToggleSideDrawer()}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={{...styles.nav, display: this.state.side}}>
            <TouchableOpacity
              style={{width: '100%', height: '100%'}}
              onPress={() => handleToggleSideDrawer()}>
              <View style={{width: '100%', height: 45}}>
                <Link
                  to="/signup"
                  underlayColor="#f0f4f7"
                  onPress={() => handleToggleSideDrawer()}>
                  <Text style={styles.textStyle}>SignUp</Text>
                </Link>
              </View>
              <View style={{width: '100%', height: 45}}>
                <Link
                  to="/signin"
                  underlayColor="#f0f4f7"
                  onPress={() => handleToggleSideDrawer()}>
                  <Text style={styles.textStyle}>Signin</Text>
                </Link>
              </View>
              <View style={{width: '100%', height: 45}}>
                <Link
                  to="/"
                  underlayColor="#f0f4f7"
                  onPress={() => handleToggleSideDrawer()}>
                  <Text style={styles.textStyle}>Home</Text>
                </Link>
              </View>
              <View style={{width: '100%', height: 45}}>
                <Link
                  onPress={() => handleToggleSideDrawer()}
                  to="/members"
                  underlayColor="#f0f4f7"
                  style={{width: '100%', height: '100%'}}>
                  <Text style={styles.textStyle}>Members</Text>
                </Link>
              </View>
              <View style={{width: '100%', height: 45}}>
                <Link
                  onPress={() => handleToggleSideDrawer()}
                  to="/topics"
                  underlayColor="#42B8F3"
                  style={{width: '100%', height: '100%'}}>
                  <Text style={styles.textStyle}>Groups</Text>
                </Link>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'transparent',
              width: '100%',
              height: '100%',
            }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/t" component={Topic} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
          </View>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  header: {
    height: 50,
    backgroundColor: '#4285B6',
  },
  nav: {
    width: '60%',
    height: '100%',
    backgroundColor: '#335068',
  },
  navItem: {
    marginTop: 5,
    flex: 1,
    alignItems: 'center',
    height: 45,
    backgroundColor: 'red',
  },
  subNavItem: {},
  topic: {
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
  },
});

export default App;
