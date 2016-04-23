import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignIn from './signin.ios'; 
import Main from './App/Components/Main.js';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class battlegroundReact extends Component {

  render() {
    return (
      style={styles.container}
      <NavigatorIOS
        initialRoute={{
          title: 'Battlegrounds',
          component: Main
        }}
      />
    );
  }
}

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
