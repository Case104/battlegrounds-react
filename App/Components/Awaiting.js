import React, {
  Component,
  Image,
  MapView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

import BackgroundGeolocation from 'react-native-background-geolocation';
import BattlePrompt from './BattlePrompt.js';
import Profile from './Profile.js';
import Leaderboard from './Leaderboard.js';
import api from '../Utils/api.js';
import styles from '../Utils/styles.js';

export default class Awaiting extends Component {

  turnOnGeolocation(){
    BackgroundGeolocation.start(function() {
      BackgroundGeolocation.getCurrentPosition({timeout: 30}, function(location) {
      }, function(error) {
        console.log("Location error: " + error);
      });
    })

    BackgroundGeolocation.on('location', (location) => {
      api.postGeolocations(location, this.props.user.email)
      .then((battle) => {
        this.props.navigator.push({
          component: BattlePrompt,
          passProps: {
            user: this.props.user,
            battle: battle
          }
        })
      })
      .done()
    });
  }

  turnOffGeolocation(){
    BackgroundGeolocation.stop();
  }

  navToProfile(){
    this.props.navigator.push({
      component: Profile,
      passProps: {user: this.props.user},
    })
  }

  navToLeaderboard(){
     this.props.navigator.push({
      component: Leaderboard,
      passProps: {user: this.props.user},
    })
  }

  render() {
    return (
      <View style={styles.main}>
       <View style={styles.container}>
         <View style={styles.bottomNav}>
          <TouchableHighlight
            style={localStyles.button}
            onPress={this.turnOnGeolocation.bind(this)}>
            <Image
                source={require('../Utils/Images/ready.png')}
                style={{width: null, height: null, resizeMode: 'stretch',flex:1}}
              >
                <Text style={localStyles.awaitingText}>Ready</Text>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight
            style={localStyles.button}
            onPress={this.turnOffGeolocation.bind(this)}>
            <Image
                source={require('../Utils/Images/not-ready.png')}
                style={{width: null, height: null, resizeMode: 'stretch',flex:1}}
              >
                <Text style={localStyles.awaitingText}>Not Ready</Text>
            </Image>
          </TouchableHighlight>
          </View>
          <View style={styles.headlineContainer}>
           <Text style={styles.headline}>
             Awaiting Challenge...
           </Text>
          </View>
          <View style={styles.awaitingMapContainer}>
           <MapView style={styles.map}
             showsUserLocation={true}
             followsUserLocation={true}
           />
          </View>
       </View>

       <View style={styles.bottomNav}>

          <TouchableHighlight
            style={styles.squareButton}
            underlayColor='white'
            onPress={this.navToProfile.bind(this)}
          >
             <Image
                source={require('../Utils/Images/profile.png')}
                style={{width: null, height: null, resizeMode: 'stretch',flex:1}}
              />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.squareButton}
            underlayColor='white'
            onPress={this.navToLeaderboard.bind(this)}
          >
             <Image
                source={require('../Utils/Images/leaderboard.png')}
                style={{width: null, height: null, resizeMode: 'stretch',flex:1}}
              />
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}

var localStyles = StyleSheet.create({
  button: {
    // backgroundColor:'#E1F2DF',
    flex:1,
    height: 108,
    width: 91,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth:1.5,
    // borderColor:'gray',
  },
  awaitingText: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

