require('react-native-button')
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
        <View style={styles.buttonContainer}>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={this._handlePress}
          >
            Press Me!
          </Button>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{task.description}</Text>         
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  descriptionContainer: {
    flex:1,
  },
  countContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'blue',
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
  buttonContainer: {
    height: 45,
    borderRadius: 4,
    backgroundColor: 'white',
  }

});