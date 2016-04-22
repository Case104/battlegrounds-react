import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

var styles = require('./styles.ios')

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
