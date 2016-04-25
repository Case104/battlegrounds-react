import {BackgroundGeolocation} from 'react-native-background-geolocation';

function geolocationSetup() {

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
    // HTTP / SQLite config
    url: 'http://posttestserver.com/post.php?dir=cordova-background-geolocation',
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
}

module.exports = geolocationSetup