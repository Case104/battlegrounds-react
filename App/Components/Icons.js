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
      // <Image source={require('../Utils/Images/battleGround.png')} style={styles.mainBackDrop}>
      <TouchableHighlight style={styles.squareButton} underlayColor='white'  onPress={this.handleSubmit}>



          <Text style={styles.buttonText}>X</Text>
      </TouchableHighlight>
      // </Image>
    );
  }
}

export class CircleButton extends Component{
  handleSubmit(){
    console.log('brett sucks more')
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
