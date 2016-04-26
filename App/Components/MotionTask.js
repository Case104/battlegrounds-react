import React, {
  View,
  Component,
  Text,
  TouchableHighlight,
  StyleSheet
}from 'react-native'

var styles = require('./App/Utils/styles.js');

var {
    Accelerometer,
    Gyroscope,
    Magnetometer
} = require('NativeModules'); //Accelerometer Components

var {
  DeviceEventEmitter // will emit events that you can listen to
} = React;

import CountDown from 'react-native-countdown'; //Timer Countdown
import TimerMixin from 'react-timer-mixin';//Possible timer Component
import SquareButton from './Icons.js'
import CircleButton from './Icons.js'

export class MotionTask Component {

  render() {
    return(

    )
  }
}


 // var accelerationChanges = []
      // Accelerometer.setAccelerometerUpdateInterval(0.2); // in seconds
      // DeviceEventEmitter.addListener('AccelerationData', function (data) {
      //   var zAxis = data.acceleration.z
      //   var initialZ = accelerationChanges[0]
      //   var mostRecentZ = accelerationChanges[(accelerationChanges.length - 1)]
      //   var Zdiff = (mostRecentZ - initialZ)
      //   accelerationChanges.push(zAxis)
      //   console.log('Accelerometer data', data.acceleration.z);
      //   console.log('initial z',initialZ);
      //   console.log('most recent z',mostRecentZ);
      //   if((mostRecentZ - initialZ) > 1 || (mostRecentZ - initialZ) < -2) {
      //     console.log('Great job. Way to not suck so much. Keep up the mediocre work!!!');
        // }
    //   render(){
    //     return(
    //       <CountDown
    //         onPress={this.sendAgain} //default null
    //         text={'Try again'} //default ''
    //         time={10} //default 60
    //         buttonStyle={{padding:20}}
    //         textStyle={{color:'black'}} //default black
    //         disabledTextStyle={{color:'gray'}} //default gray
    //       />
    //     )
    //   }
    // }





    // Accelerometer.startAccelerometerUpdates(); // you'll start getting AccelerationData events above

      // Accelerometer.stopAccelerometerUpdates()

      // alert('accel');
    // });

    //Accelerometer.stopAccelerometerUpdates();
