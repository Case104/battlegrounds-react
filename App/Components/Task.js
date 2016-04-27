import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import Winner from './Winner'
import {CircleButton} from './Icons.js'
import {SquareButton} from './Icons.js'
import styles from'../Utils/styles.js'
import api from '../Utils/api.js'


export default class Task extends Component {

  handlePress(battle){
    console.log('task battle', battle)
    this.props.navigator.push({
      component: Winner,
      passProps: {
        user: this.props.user,
        battle: battle,
      }
    })
  }

  _quickDraw(){
    api.quickDrawRequest(this.props.battle)
    .then((battle) => this.handlePress(battle)
    )
    .catch((err) => {
      console.log('error in deny', err)
    })
    .done()
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.countContainer}>
          </View>
            <View style={styles.circleButtonContainer}>
              <TouchableHighlight
                style={styles.circleButton}
                onPress={this._quickDraw.bind(this)}
                underlayColor='white'>
                <Text style={styles.buttonText}>Click</Text>
              </TouchableHighlight>
            </View>
          <View style={styles.descriptionContainer}>
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



