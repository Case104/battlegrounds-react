import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import {SquareButton} from './Icons.js'
import styles from '../Utils/styles.js'

export default class Winner extends Component {
	
	componentDidMount(){
		console.log(this.props)
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
					<SquareButton/>
					<SquareButton/>
				</View>
			</View>
		)
	}
}