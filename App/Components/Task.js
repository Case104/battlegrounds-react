

var TASK_DATA = [
  {name: 'Quick Draw!', description: 'Be The First To Click'},
];
var COUNT_DOWN = [
  {count:'10'},
];
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {CircleButton} from './Icons.js'
import {SquareButton} from './Icons.js'
var styles = require('../Utils/styles.js')
export class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      error: false,
      winner:false
    }
  }
  handlePress() {
    // this.setState {
    //   isLoading: true,
    //   winner:true
    // }
  }

  render() {
    var task = TASK_DATA[0];
    var countDown = COUNT_DOWN[0];
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.countContainer}>
            <Text style={styles.countDown}>{countDown.count}</Text>
          </View>
            <View style={styles.circleButtonContainer}>
              <CircleButton
                onPress={this.handlePress}
              />
            </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{task.description}</Text>
          </View>
        </View>
        <View style={styles.bottomNav}>
            <SquareButton/>
            <SquareButton/>
        </View>
      </View>
    );
  }
}



