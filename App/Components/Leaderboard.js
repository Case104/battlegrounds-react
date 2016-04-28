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
import Profile from './Profile.js';

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

  navToProfile(){
    this.props.navigator.push({
      component: Profile,
      passProps: {user: this.props.user},
    })
  }

  navToAwaiting(){
    this.props.navigator.push({
      component: Awaiting,
      passProps: {user: this.props.user},
    })
  }

  render() {
  	if (!this.state.loaded){
  		return this.renderLoadingView();
  	}

    return (
      <View style={styles.container}>
      	<ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderUser}
          style={styles.listView}
        />
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
          onPress={this.navToProfile.bind(this)}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableHighlight>
      </View>
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
        <View style={styles.leaderboardContainer}>
          <Image
            source={{uri: user.avatar}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.leaderboardName}>{user.email}</Text>
            <Text style={styles.points}>{user.points}</Text>
          </View>
        </View>
    );
  }
}
