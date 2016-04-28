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
    console.log('battle',this.props.battle.battle.users[0].avatar)
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={promptStyles.battlePromptText}>Accept Challenge???</Text>
          <Image style={styles.winnerImg} source={{uri: this.props.battle.battle.users[0].avatar }} />
          <Text style={promptStyles.battlePromptText}>Vs.</Text>
          <Image style={styles.winnerImg} source={{uri: this.props.battle.battle.users[1].avatar }} />
        </View>
        <View style={styles.bottomNav}>
          <TouchableHighlight
          style={styles.squareButton}
            value={this.props.user.email}
            onPress={this._denyBattle.bind(this)}>
            <Image
              source={require('../Utils/Images/decline.png')}
              style={{width: null, height: null, resizeMode: 'cover',flex:1}}
            />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.squareButton}
            value={this.props.user.email}
            onPress={this.handleAccept.bind(this)}>
            <Image
              source={require('../Utils/Images/accept.png')}
              style={{width: null, height: null, resizeMode: 'stretch',flex:1}}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
var promptStyles = StyleSheet.create({
  battlePromptText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
})
