

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

import {CircleButton} from './icons.ios'
import {SquareButton} from './icons.ios'
var styles = require('./styles.ios')
export class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      error: false
    }
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
              <CircleButton/>
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



