import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Awaiting} from './awaiting.ios';

class battlegroundReact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    if (this.state.something) {
      return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 40,
    color: 'orange',
  },

});

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
