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

  navToAwaiting(user){
    console.log('user', user)
    this.props.navigator.push({
      component: Awaiting,
      passProps: {user: user},
    })
  }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      api.postUsers(user)
        .then((googleUser) => this.navToAwaiting(googleUser)
        )
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done()
  }

  _fb_signIn(fbData) {
    var promisesArray = [];
    promisesArray.push(api.getFbPhoto(fbData));
    promisesArray.push(api.getFbEmail(fbData));
    Promise.all(promisesArray)
    .then((values) => {
      api.postUsersFb(values[0], values[1])
        .then((user) => {
          this.navToAwaiting(user)
        })
    })
    .catch((err) => console.log('Goofed', err)
    )
    .done()
  }

  render() {
    return (
      <Image source={require('../Utils/Images/battleGround.png')} style={styles.mainBackDrop}>
        <Text style={styles.title}>
          Battlegrounds
        </Text>
        <View style={styles.signInWrapper}>
          <FBLogin 
          permissions={["email", "user_friends", "public_profile"]}
            onLogin={this._fb_signIn.bind(this)}
          />
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
