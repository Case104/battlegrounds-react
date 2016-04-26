import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';


// import BackgroundGeolocation from 'react-native-background-geolocation';
import SignIn from './App/Components/SignIn.js';
var API_URL = 'http://localhost:3000'
var styles = require('./App/Utils/styles.js');

var BackgroundGeolocation = require('react-native-background-geolocation');

class battlegroundReact extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      availableForBattle: false,
    }

    BackgroundGeolocation.configure({
      desiredAccuracy: 0,
      stationaryRadius: 50,
      distanceFilter: 50,
      disableElasticity: false,
      locationUpdateInterval: 5000,
      minimumActivityRecognitionConfidence: 80,
      fastestLocationUpdateInterval: 5000,
      activityRecognitionInterval: 10000,
      stopDetectionDelay: 1,
      stopTimeout: 2,
      activityType: 'AutomotiveNavigation',
      debug: true,
      // Android config
      forceReloadOnLocationChange: false,
      forceReloadOnMotionChange: false,
      forceReloadOnGeofence: false,
      stopOnTerminate: false,
      startOnBoot: true,
      // HTTP / SQLite config
      url: 'http://posttestserver.com/post.php?dir=joncase',
      batchSync: false,
      autoSync: true,
      maxDaysToPersist: 1,
      headers: {
        "X-FOO": "bar"
      },
      params: {
        "auth_token": "maybe_your_server_authenticates_via_token_YES?"
      },
    });

    BackgroundGeolocation.on('location', function(location) {
      // Post geolocation data
      fetch(API_URL + '/geolocations', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          geolocation: location,
          // Determine which property is available to use for user
          email: 'jpcase104@gmail.com',
        })
      })
      .then((response) => response.text())
      .then((responseText) => {
        // console.log(responseText)
      })
      this.setState({message: location});
      console.log('- [js]location: ', location);
    }.bind(this));

    BackgroundGeolocation.on('error', function(error) {
      var type = error.type;
      var code = error.code;
      console.log(type + " Error: " + code);
    });

    BackgroundGeolocation.on('motionchange', function(location) {
        this.setState({message: location});
        console.log('- [js]motionchanged: ', location);
    }.bind(this));

    BackgroundGeolocation.start(function() {
      console.log('- [js] BackgroundGeolocation started successfully');
      BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
        console.log('- [js] BackgroundGeolocation received current position: ', location);
      }, function(error) {
        console.log("Location error: " + error);
      });
    });

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
