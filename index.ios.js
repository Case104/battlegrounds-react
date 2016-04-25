import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignIn from './App/Components/SignIn.js'; 
import GeolocSetup from './App/Utils/geolocation.js';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class battlegroundReact extends Component {

    render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Battlegrounds',
          component: SignIn
        }} 
      />
    );
  }

  constructor() {
    GeolocSetup();
  }

  // constructor() {
  //   super();
  //   this.state = {message: ''}
  //   BackgroundGeolocation.configure({
  //     desiredAccuracy: 0,
  //     stationaryRadius: 50,
  //     distanceFilter: 50,
  //     disableElasticity: false,
  //     locationUpdateInterval: 5000,
  //     minimumActivityRecognitionConfidence: 80,
  //     fastestLocationUpdateInterval: 5000,
  //     activityRecognitionInterval: 10000,
  //     stopDetectionDelay: 1,
  //     stopTimeout: 2,
  //     activityType: 'AutomotiveNavigation',
  //     debug: true,
  //     // Android config
  //     forceReloadOnLocationChange: false,
  //     forceReloadOnMotionChange: false,
  //     forceReloadOnGeofence: false,
  //     stopOnTerminate: false,
  //     startOnBoot: true,
  //     // HTTP / SQLite config
  //     url: 'http://posttestserver.com/post.php?dir=cordova-background-geolocation',
  //     batchSync: false,
  //     autoSync: true,
  //     maxDaysToPersist: 1,
  //     headers: {
  //       "X-FOO": "bar"
  //     },
  //     params: {
  //       "auth_token": "maybe_your_server_authenticates_via_token_YES?"
  //     },
  //   });
  //   BackgroundGeolocation.on('location', function(location) {
  //     this.setState({message: JSON.stringify(location)});
  //     console.log('- [js]location: ', JSON.stringify(location));
  //   }.bind(this));
  //   BackgroundGeolocation.on('error', function(error) {
  //     var type = error.type;
  //     var code = error.code;
  //     alert(type + " Error: " + code);
  //   });
  //   BackgroundGeolocation.on('motionchange', function(location) {
  //       this.setState({message: JSON.stringify(location)});
  //       console.log('- [js]motionchanged: ', JSON.stringify(location));
  //   }.bind(this));

  //   BackgroundGeolocation.start(function() {
  //     console.log('- [js] BackgroundGeolocation started successfully');
  //     BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
  //       console.log('- [js] BackgroundGeolocation received current position: ', JSON.stringify(location));
  //     }, function(error) {
  //       alert("Location error: " + error);
  //     });
  //   });
  // }
};

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
