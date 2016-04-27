import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../Utils/styles.js'
import Awaiting from './Awaiting.js'
import Leaderboard from './Leaderboard.js'

export default class Winner extends Component {
	
	componentDidMount(){
		console.log(this.props)
	}	

	navToAwaiting(){
    this.props.navigator.push({
      component: Awaiting,
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
		return(
			<View style={styles.main}>
				<View style={styles.container}>
					<Text style={styles.winnerBanner}>Winner!</Text>
					<Image source={{uri: this.props.battle.avatar}}
						style={styles.winnerImg} />
				</View>
				<View style={styles.bottomNav}>

				<TouchableHighlight style={styles.squareButton} underlayColor='white' onPress={this.navToAwaiting.bind(this)}>
          <Text style={styles.buttonText}>X</Text>
      	</TouchableHighlight>

				<TouchableHighlight style={styles.squareButton} underlayColor='white' onPress={this.navToLeaderboard.bind(this)}>
          <Text style={styles.buttonText}>X</Text>
      	</TouchableHighlight>

      	</View>
			</View>
		)
	}
}