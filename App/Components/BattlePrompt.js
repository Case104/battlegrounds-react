import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../Utils/styles';

export default class BattlePrompt extends Component {

  handleAccept(){
    this.props.navigator.push({
      component: Task,
      passProps: {
        thing: 'thing',
        user: this.props.user,
        battle: this.props.battle,
      }
    })
  }

  handleDecline(){
    this.props.navigator.push({
      component: Awaiting,
      passProps: {
        thing: 'thing',
        user: this.props.user,
        battle: this.props.battle,
      }
    })
  }


  render() {
    console.log('battleprompt', this.props)
    return (
      <View style={styles.container}>

      <TouchableHighlight
          value={this.props.user.email}
          onPress={this.handleDecline.bind(this)}>
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
