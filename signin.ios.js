import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Main from './App/Components/Main.js';


export default class SignIn extends Component {

	constructor() {
    super();
    GoogleSignin.configure({
      iosClientId: "970905254554-jvucq5466862hiv6qkpjdgqevg3l57em.apps.googleusercontent.com", // only for iOS
  	});    
  }

  componentDidMount(){

  }

  _signIn() {
  	GoogleSignin.signIn()
		.then((user) => {
  		console.log(user);
  		this.setState({user: user});
		})
		.catch((err) => {
  		console.log('WRONG SIGNIN', err);
		})
		.done(this.props.navigator.push({
      component: Main
    }))
  }


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>
        Battlegrounds
      </Text>
        <GoogleSigninButton
          style={{width: 312, height: 48}}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    color: 'orange',
  },

});
