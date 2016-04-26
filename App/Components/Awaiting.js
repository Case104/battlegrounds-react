import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  MapView,
  View
} from 'react-native';

import BackgroundGeolocation from 'react-native-background-geolocation';
import BattlePrompt from './BattlePrompt.js';
var styles = require('../Utils/styles.js')
var API_URL = 'http://localhost:3000'

export default class Awaiting extends Component {

  componentDidMount() {
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
          // TODO Determine how to set user here
          email: 'jpcase104@gmail.com',
        })
      })
      .then((response) => response.json())
      .then((battle) => {
        console.log(battle)
        this.props.navigator.push({
          component: BattlePrompt,
          passProps: {obj: response}
        })
      })
    }.bind(this));
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
// export default class Awaiting extends Component {
//   render() {
//     return (
//      <View>
//        <View style={styles.headlineContainer}>
//          <Text style={styles.headline}>
//            Awaiting Challengers
//          </Text>
//        </View>
//        <View style={styles.awaitingMapContainer}>
//          <MapView style={styles.map}
//            showsUserLocation={true}
//            followsUserLocation={true}
//          />
//        </View>
//        <Icons />
//      </View>
//     );
//   }
// }
