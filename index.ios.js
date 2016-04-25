import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BackgroundGeolocation from 'react-native-background-geolocation';
import SignIn from './App/Components/SignIn.js';
var API_URL = 'http://localhost:3000'
var styles = require('./App/Utils/styles.js');

class battlegroundReact extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    }
    BackgroundGeolocation.start(function() {
      BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
        console.log('- [js] BackgroundGeolocation received current position: ', location);
      }, function(error) {
        console.log("Location error: " + error);
      });
    });
    BackgroundGeolocation.on('location', function(location) {
      fetch(API_URL + '/geolocations', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          geolocation: location,
          email: 'jpcase104@gmail.com',
        })
      })
      .then((response) => JSON.stringify(response))
      .then((responseText) => {
        console.log(responseText);
      })
      this.setState({message: location});
      console.log('- [js]location: ', location);
    }
    .bind(this));
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.main}
        initialRoute={{
          title: 'Battlegrounds',
          component: SignIn
        }}
      />
    );
  }

};

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
