import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  MapView,
  View
} from 'react-native';

class awaiting extends Component {
  render() {
    return (
      <View>
        <Text styles={styles.headline}>
          Awaiting Challengers
        </Text>
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}
        />
        <Icons />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('battlegroundReact', () => battlegroundReact);
