import React, {
  Component,
  ListView,
  Image,
  StyleSheet,
  Text,
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
      dataSource: new ListView.DataSource({
      	rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

	componentDidMount(){
		api.getLeaderboardData()
		.then((users) => this.setState({
			dataSource: this.state.dataSource.cloneWithRows(users),
			loaded: true,
		}))
		.done()
	}

  render() {
  	if (!this.state.loaded){
  		return this.renderLoadingView();
  	}

    return (
    	<ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderUser}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading Users...
        </Text>
      </View>
    );
  }

  renderUser(user) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: user.avatar}}
          style={styles.winnerImg}
        />
        <View style={styles.rightContainer}>
          <Text>{user.email}</Text>
          <Text>{user.points}</Text>
        </View>
      </View>
    );
  }
}
