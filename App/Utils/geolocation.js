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
  });
}

module.exports = geolocationSetup
