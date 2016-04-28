import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
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
      <View style={styles.main}>
        <Image style={styles.mainBackDrop} source={require('../Utils/Images/app.png')}>

        </Image>
        <View style={styles.bottomNav}>
           <TouchableHighlight
            style={styles.squareButton}
            underlayColor='white'
            onPress={this._signIn.bind(this)}
          >
            <Image
                source={require('../Utils/Images/google.png')}
                style={{width: null, height: null, resizeMode: 'stretch',flex:1}}
            />
          </TouchableHighlight>
          <View style={styles.fb}>
            <FBLogin
              style={{}}
              permissions={["email", "user_friends", "public_profile"]}
              onLogin={this._fb_signIn.bind(this)}
             />
          </View>
        </View>
      </View>
    );
  }
}
