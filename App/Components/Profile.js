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
        <View style={styles.topNav}>
          <Text style={styles.battlePromptText}>Profile</Text>
        </View>
        <Image style={styles.mainBackDrop} source={require('../Utils/Images/wood-background.png')}>
          <Image
            source={{uri: this.props.user.avatar}}
            style={styles.winnerImg}
          />
  				<Text style={styles.battlePromptText}>{this.props.user.email}</Text>
          <Text style={styles.battlePromptText}>{this.props.user.points}</Text>
        </Image>
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
