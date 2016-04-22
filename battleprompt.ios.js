import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import {Icons} from './icons.ios';
var styles = require('./styles.ios')

export class BattlePrompt extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headline}>
          BATTLE
        </Text>
          <View style={styles.userAvatar}>
            <Image>
          </View>
        <Text style={styles.headline}>
          VS
        </Text>
          <View style={styles.userAvatar}>
            <Image>
          </View>
        <Icons />
      </View>
    );
  }
}
