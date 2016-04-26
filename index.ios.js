import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  View,
} from 'react-native';

import BackgroundGeolocation from 'react-native-background-geolocation';
import SignIn from './App/Components/SignIn.js';
// change this later
var styles = require('./App/Utils/styles.js');

class battlegroundReact extends Component {

  render() {
    return (
        <NavigatorIOS
          style={styles.main}
          initialRoute={{
            title: 'Battlegrounds',
            component: SignIn,
          }}
        />
    );
  }
};

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
