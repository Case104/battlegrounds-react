import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignIn from './signin.ios';

var styles = require('./styles.ios')
var BackgroundLocation = require('react-native-background-geolocation')

class battlegroundReact extends Component {
  constructor() {
    super();
    this.state = {};
    BackgroundLocation.configure({})
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
