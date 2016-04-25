import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

var styles = require('../Utils/styles.js')

export class Icons extends Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Text style={styles.iconProfile}>
          Profile
        </Text>
        <Text style={styles.iconLeaderboard}>
          Leaderboard
        </Text>
      </View>
    );
  }
}

export class SquareButton extends Component {
  handleSubmit(){

  } 
    render() {
    return (
      <TouchableHighlight
        style={styles.squareButton}
        onPress={this.handleSubmit}
        underlayColor='white'>
          <Text style={styles.buttonText}>X</Text>
      </TouchableHighlight>
    );
  } 
}

export class CircleButton extends Component{
  handleSubmit(){

   } 
  render() {
    return (
      <TouchableHighlight
        style={styles.circleButton}
        onPress={this.handleSubmit}
        underlayColor='white'>
          <Text style={styles.buttonText}>Click</Text>
      </TouchableHighlight>
    );
  } 
}
