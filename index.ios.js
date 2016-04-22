/**
 * Sample React Native App
 
 * https://github.com/facebook/react-native
 * @flow
 */
// import {Task} from './task.ios'
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

class battlegroundReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        < Task />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
var BATTLE_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
var TASK_DATA = [
  {name: 'Throw your phone!', description: 'Throw your phone indescriminately in any direction. Go ahead', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
var COUNT_DOWN = [
  {count:'10'},
];
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Task extends Component {
  render() {
    var task = TASK_DATA[0];
    var countDown = COUNT_DOWN[0];
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.countDown}>{countDown.count}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{task.description}</Text>         
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  descriptionContainer: {
    flex:1,
  },
  countContainer: {
    flex: 1,
  },
  countdown: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);