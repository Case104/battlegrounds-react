var React = require('react-native');

var {
	View,
	Text,
	StyleSheet
} = React;

var styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
	},
})

class Main extends React.Component{
	render(){
		<View style={styles.mainContainer}>
			<Text>Testing the router</Text>
		</View>
	}
};

module.exports = Main;