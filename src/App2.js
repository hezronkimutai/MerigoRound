// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Expo from 'expo';

// async function signInWithGoogleAsync() {
//   try {
//     const result = await Expo.Google.logInAsync({
//       androidClientId: '944363662100-vtptmm9aemekbkeijmv88i12n4n57dek.apps.googleusercontent.com',
//       androidStandaloneAppClientId: '944363662100-18mclfjmarm7ssnqo04mh1qpk72mqoi0.apps.googleusercontent.com',
//       scopes: ['profile', 'email'],
//       iosClientId: '944363662100-o42ht8gh12giqr3kov82vj3qua1f5ekq.apps.googleusercontent.com',
//       iosStandaloneAppClientId: '944363662100-8gg6i4c3lmleihh4japdf09r4a6f6rie.apps.googleusercontent.com',
//     });

//     if (result.type === 'success') {
//       return result.user.email;
//     } else {
//       return 'cancelled';
//     }
//   } catch(e) {
//     console.log('Google Signin Error: ', e)
//     return 'error: ' + e;
//   }
// }

// export default class App extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       googleResponse: 'waiting for signin',
//     }
//     this.googleSigninCallback = this.googleSigninCallback.bind(this)
//   }

//   googleSigninCallback (googleResponse) {
//     console.log('googleResponse: ', googleResponse);
//     this.setState({
//       googleResponse: googleResponse,
//     })
//   }

//   componentDidMount () {
//     signInWithGoogleAsync()
//       .then(this.googleSigninCallback)
//       .catch(this.googleSigninCallback)
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>{this.state.googleResponse}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });