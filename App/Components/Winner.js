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
				<Image style={styles.mainBackDrop} source={require('../Utils/Images/wood-background.png')}>
					<Text style={styles.winnerBanner}>Winner!</Text>
					<Image source={{uri: this.props.battle.avatar}}
						style={styles.winnerImg} />
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
