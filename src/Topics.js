/*This is an example to Make Phone Call, Send SMS or Email Using React Native Communication*/
import React, {Component} from 'react';
//import React
 
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
//import Basic React Components
 
import Communications from 'react-native-communications';
// either import the whole module and call as Communications.phonecall('0123456789', true)
// or can import single methods and call straight via the method name
// import { web, phonecall } from 'react-native-communications';
// e.g. onPress={() => { phonecall('0123456789', true) }}
 
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingStyle}>Example of React Native Communication</Text>
        
        {/*To make a phone call phonecall(phoneNumber, prompt) */}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.phonecall('0123456789', true)}>
            <Text style={styles.text}>
              Make Phone Call
            </Text>
        </TouchableOpacity>
 
        {/*To send the mail function(to, cc, bcc, subject, body)*/}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.email(['aboutreact11@gmail.com', 'hello@aboutreact.com'],null,null,'Demo Subject','Demo Content for the mail')}>
          {/*email(to, cc, bcc, subject, body)*/}
            <Text style={styles.text}>
              Send an Email
            </Text>
        </TouchableOpacity>
 
        {/*To send the text message function(phoneNumber = null, body = null)*/}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.text('0123456789', 'Test Text Here')}>
            <Text style={styles.text}>
              Send a Text/iMessage
            </Text>
        </TouchableOpacity>
 
        {/*To open a web URL function(address = null)*/}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.web('https://aboutreact.com')}>
            <Text style={styles.text}>
              Open https://aboutreact.com
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
};
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
    padding: 16,
  },
  headingStyle: {
    fontSize: 25,
    textAlign: 'center',
    padding: 30,
  },
  button: {
    justifyContent: 'center',
    width : 300,
    backgroundColor:"#307cae",
    marginTop : 20,
  },
  text: {
    fontSize: 18,
    textAlign : 'center',
    padding : 10,
    color : '#ffffff',
  },
});