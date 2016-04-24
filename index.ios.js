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
import Profile from './App/Components/Profile.js';
import Button from './App/Components/Button.js';


var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class battlegroundReact extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Battlegrounds',
          component: SignIn
        }} 
      />
    );
  }
}

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
