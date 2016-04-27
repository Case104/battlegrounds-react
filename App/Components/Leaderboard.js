import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from '../Utils/styles.js';
import api from '../Utils/api.js';
import Awaiting from './Awaiting.js';

export default class Leaderboard extends Component {

	constructor() {
    super(); 
    this.state = {
      users: null,
    };
  }

	componentDidMount(){
		api.getLeaderboardData()
		.then((users) => this.setState({users: users}))
	}

  render() {
    return (
    	<View style={styles.container}>
    		<Text>I've arrived motherfucker!</Text>
    	</View>
    );
  }
}
