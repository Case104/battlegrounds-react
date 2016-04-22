import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  MapView,
  View
} from 'react-native';

import {Icons} from './icons.ios';

export default class Awaiting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Awaiting Challengers
        </Text>
        <MapView style={styles.map}
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
        />
      <Icons />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headline: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

