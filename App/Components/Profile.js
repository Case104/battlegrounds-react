import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import Awaiting from './Awaiting.js'
import Leaderboard from './Leaderboard.js'
import styles from '../Utils/styles.js'

export default class Profile extends Component {

  navToLeaderboard(){
    this.props.navigator.push({
      component: Leaderboard,
      passProps: {user: this.props.user},
    })
  }

  navToAwaiting(){
    this.props.navigator.push({
      component: Awaiting,
      passProps: {user: this.props.user},
    })
  }


	render(){
		return(
			<View style={styles.main}>
        <View style={styles.container}>
  				<Text>This is the profile</Text>
        </View>
        <View style={styles.bottomNav}>
  				 <TouchableHighlight
            style={styles.squareButton}
            underlayColor='white'
            onPress={this.navToAwaiting.bind(this)}
          >
            <Image
                source={require('../Utils/Images/home.png')}
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
		)
	}

}
