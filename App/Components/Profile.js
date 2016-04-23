// framework for searching for a user
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

var styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		fontSize: 12,
	}
})

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			isLoading: false,
			error: false
		}
	}

	handleChange(event){
		this.setState({
			username: event.nativeEvent.text
		});
	}

	handleSubmit(){
		this.setState({
			isLoading: true
		});
	}

	render(){
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.title}>Search for user</Text>
				<TextInput
					style={styles.title}
					value={this.state.username}
					onChange={this.handleChange.bind(this)} />
				<TouchableHighlight
					style={styles.title}
					onPress={this.handleSubmit.bind(this)}
					underlayColor='white'>
					<Text style={styles.title}>Search</Text>
				</TouchableHighlight>
			</View>
		)
	}

}