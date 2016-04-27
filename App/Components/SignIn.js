import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import styles from '../Utils/styles.js';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import api from '../Utils/api.js';
import Awaiting from './Awaiting.js'
import FBLogin from 'react-native-facebook-login'

export default class SignIn extends Component {

  constructor() {
    super();
    GoogleSignin.configure({
      iosClientId: "970905254554-jvucq5466862hiv6qkpjdgqevg3l57em.apps.googleusercontent.com", // only for iOS
    });
  }

  navToAwaiting(){
    this.props.navigator.push({
      component: Awaiting,
      passProps: {user: GoogleSignin.currentUser()},
    })
  }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      api.postUsers(user)
    })
    .then(() => this.navToAwaiting()
    )
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done()
  }

  render() {
    return (
      <Image source={require('../Utils/Images/battleGround.png')} style={styles.mainBackDrop}>
        <Text style={styles.title}>
          Battlegrounds
        </Text>
        <View style={styles.signInWrapper}>
          <FBLogin />
          <GoogleSigninButton
            style={{width: 312, height: 48}}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn.bind(this)}
            />
        </View>
      </Image>
    );
  }
}
