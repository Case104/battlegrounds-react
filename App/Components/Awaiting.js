import React, {
  Component,
  StyleSheet,
  Text,
  MapView,
  View
} from 'react-native';

import BattlePrompt from './BattlePrompt';
import BackgroundGeolocation from 'react-native-background-geolocation';
var API_URL = 'http://localhost:3000'
var styles = require('../Utils/styles.js')

export default class Awaiting extends Component {

  componentDidMount(){

    BackgroundGeolocation.start(function() {
      BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
      }, function(error) {
        console.log("Location error: " + error);
      });
    });

    BackgroundGeolocation.on('location', (location) => {
      fetch(API_URL + '/geolocations', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          geolocation: location,
          email: this.props.user.email
        })
      })
      .then((response) => response.json())
      .then((battle) => {
        console.log('battle', battle)
        this.props.navigator.push({
          component: BattlePrompt,
          passProps: {
            user: this.props.user,
            battle: battle
          }
        });
      })
    });
  }

  render() {
    return (
     <View>
       <View style={styles.headlineContainer}>
         <Text style={styles.headline}>
           Awaiting Challengers
         </Text>
       </View>
       <View style={styles.awaitingMapContainer}>
         <MapView style={styles.map}
           showsUserLocation={true}
           followsUserLocation={true}
         />
       </View>
     </View>
    );
  }
}
