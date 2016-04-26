import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  MapView,
  View
} from 'react-native';

import BackgroundGeolocation from 'react-native-background-geolocation';
import BattlePrompt from './BattlePrompt.js';
import api from '../Utils/api.js';
var styles = require('../Utils/styles.js')

export default class Awaiting extends Component {

  componentDidMount(){

    BackgroundGeolocation.start(function() {
      BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
      }, function(error) {
        console.log("Location error: " + error);
      });
    })

    BackgroundGeolocation.on('location', (location) => {
      api.postGeolocations(location, this.props.user.email)
      .then((battle) => {
        console.log('battle', battle)
        this.props.navigator.push({
          component: BattlePrompt,
          passProps: {
            user: this.props.user,
            battle: battle
          }
        }).done();
      })
    });
  }

  render() {
    return (
     <View style={styles.container}>
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
