import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';


class icons extends Component {
  render() {
    return (
      <View>
        <Text>
          Profile
        </Text>
        <Text>
          Leaderboard
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
