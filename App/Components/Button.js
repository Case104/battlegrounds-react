import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import SignIn from '../../signin.ios'; 


var styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
	},
})

export default class Button extends Component{

	constructor(props){
		super(props);
		this.state = {
			username: '',
			isLoading: false,
			error: false
		}
	}

	handleSubmit(){
		this.props.navigator.push({
			component: SignIn
		})
	}

	render(){
		return(
			<View style={styles.mainContainer}>
				<TouchableHighlight
					style={styles.mainContainer}
					value={this.state.username}
					onPress={this.handleSubmit.bind(this)}>
				<Text>Submit</Text>
				</TouchableHighlight>
			</View>
		)
	}
}