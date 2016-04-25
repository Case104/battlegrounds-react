import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  MapView,
  View
} from 'react-native';

import Icons from './Icons.js';
var styles = require('../Utils/styles.js')

export default class Awaiting extends Component {
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
