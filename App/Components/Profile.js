import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
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
			<View style={styles.container}>
				<Text>This is the profile</Text>

				 <TouchableHighlight 
          style={styles.squareButton}
          underlayColor='white'
          onPress={this.navToAwaiting.bind(this)}
        >
          <Text style={styles.buttonText}>Awaiting</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={styles.squareButton}
          underlayColor='white'
          onPress={this.navToLeaderboard.bind(this)}
        >
          <Text style={styles.buttonText}>Leaderboard</Text>
        </TouchableHighlight>

			</View>
		)
	}

}