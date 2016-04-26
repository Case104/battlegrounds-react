import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Task from './App/Components/Task.js'
import SignIn from './App/Components/SignIn.js';
import BattlePrompt from './App/Components/BattlePrompt.js';
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
