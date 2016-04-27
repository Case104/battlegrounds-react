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
import api from '../Utils/api.js';
import styles from '../Utils/styles.js';

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

       <View style={styles.bottomNav}>

          <TouchableHighlight style={styles.squareButton} underlayColor='white' onPress={this.navToProfile.bind(this)}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.squareButton} underlayColor='white' onPress={this.navToLeaderboard.bind(this)}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}
