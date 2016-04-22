import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Awaiting} from './awaiting.ios';
var styles = require('./styles.ios')

class battlegroundReact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    if (this.state.something) {
      return (
        <View>
          <Text style={styles.welcome} onPress={this.renderAwaiting}>
            Click for Awaiting
          </Text>

        </View>
      );
    } else  {
      return (
      <View>
        <Awaiting />
      </View>
    )

    }
  }

  renderAwaiting(){
  }
}

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
