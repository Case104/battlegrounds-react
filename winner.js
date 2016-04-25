import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import {SquareButton} from './icons.ios'
var styles = require('./styles.ios')

export class Winner extends Component {
	render() {
		return(
			<View style={styles.main}>
				<View style={styles.container}>
					<Text style={styles.winnerBanner}>Winner!</Text>
					<Image source={{uri: 'http://cdn.hitfix.com/photos/6203942/deadpool-australia-day.jpg'}}
						style={styles.winnerImg} />
				</View>
				<View style={styles.bottomNav}>
					<SquareButton/>
					<SquareButton/>
				</View>
			</View>
		)
	}
}