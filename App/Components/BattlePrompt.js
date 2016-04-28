import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../Utils/styles.js';
import api from '../Utils/api.js';
import Awaiting from './Awaiting.js';
import Task from './Task.js'
import MotionTask from './MotionTask.js'

export default class BattlePrompt extends Component {

  handleAccept(){
    this.props.navigator.push({
      component: MotionTask,
      passProps: {
        user: this.props.user,
        battle: this.props.battle,
      }
    })
  }

  handleDecline(){
    this.props.navigator.push({
      component: Awaiting,
      passProps: {
        user: this.props.user,
        battle: this.props.battle,
      }
    })
  }

  _denyBattle(){
    api.denyBattle(this.props.battle)
    .then(() => this.handleDecline()
    )
    .catch((err) => {
      console.log('error in deny', err)
    })
    .done()
  }

  render() {
    return (
      <View style={styles.container}>

      <TouchableHighlight
        value={this.props.user.email}
        onPress={this._denyBattle.bind(this)}>
        <Text>Decline</Text>
      </TouchableHighlight>

      <TouchableHighlight
        value={this.props.user.email}
        onPress={this.handleAccept.bind(this)}>
        <Text>Accept</Text>
      </TouchableHighlight>

      </View>
    );
  }
}
