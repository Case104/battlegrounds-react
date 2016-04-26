import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import styles from '../Utils/styles';
export default class BattlePrompt extends Component {
  render() {
    console.log('battleprompt', this.props)
    return (
      <View style={styles.main}>
        <Text>BattlePrompt</Text>
      </View>
    );
  }
}
