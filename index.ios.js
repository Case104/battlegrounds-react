
import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

<<<<<<< HEAD
import {SignIn} from './signin.ios';
=======
import SignIn from './signin.ios'; 
>>>>>>> master

var styles = require('./styles.ios')

class battlegroundReact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
     <NavigatorIOS style={{flex: 1}}
        initialRoute={{
          component: SignIn,
          title: 'Sign In or Sign Up',
        }}
      />
    );
  }
}

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
