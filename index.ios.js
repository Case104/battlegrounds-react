import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignIn from './signin.ios';

import {Awaiting} from './awaiting.ios';

class battlegroundReact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
     <NavigatorIOS style={{flex: 1}}
        initialRoute={{
          component: SignIn,
          title: 'Sign In or Sign Up',
        }}
      />
    );
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
