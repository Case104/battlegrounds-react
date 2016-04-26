import React, {
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
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
})

export default class Main extends Component {

	render(){
		return(
			<View style={styles.container}>
				<Text>test</Text>
			</View>
		)
	}
};
