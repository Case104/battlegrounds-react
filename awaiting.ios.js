import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  MapView,
  View
} from 'react-native';

import {Icons} from './icons.ios';
var styles = require('./styles.ios')

export class Awaiting extends Component {
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
      <Icons />
     </View>
    );
  }
}
