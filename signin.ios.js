import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


class signIn extends Component {

	constructor() {
    super();
    GoogleSignin.configure({
      iosClientId: "970905254554-jvucq5466862hiv6qkpjdgqevg3l57em.apps.googleusercontent.com", // only for iOS
  	});    
  }

  componentDidMount(){

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
          // onPress={this._signIn.bind(this)}
        />
      </View>
    );
  }
}