import React, {
  View,
  Component,
  Text,
  TouchableHighlight,
  StyleSheet
}from 'react-native'

var styles = require('../Utils/styles.js');

var {
    Accelerometer,
    Gyroscope,
    Magnetometer
} = require('NativeModules'); //Accelerometer Components

var {
  DeviceEventEmitter // will emit events that you can listen to
} = React;

import {SquareButton} from './Icons.js'
import Winner from './Winner.js'
import api from '../Utils/api.js'


export default class MotionTask extends Component {
  constructor(props){
    super(props)
    this.state = {velocitySum: 0}
  }

  componentDidMount(){
    var accelerationChanges = [[0.3],[0.3],[0.3]]
    Accelerometer.setAccelerometerUpdateInterval(0.1); // in seconds
    DeviceEventEmitter.addListener('AccelerationData', (data) => {
      var xAxis = data.acceleration.x
      var yAxis = data.acceleration.y
      var zAxis = data.acceleration.z
      var initialX = accelerationChanges[0][0]
      var initialY = accelerationChanges[1][0]
      var initialZ = accelerationChanges[2][0]
      if(xAxis > 1 || xAxis < -1) {
      accelerationChanges[0].push(xAxis)
      } else if(yAxis > 1 || yAxis < -1) {
      accelerationChanges[1].push(yAxis)
      } else if(zAxis > 1 || yAxis < -1) {
      accelerationChanges[2].push(zAxis)
      };

      var sum = this.sumVelocity(accelerationChanges);
      if (parseInt(sum) >= 100){
        console.log('this', this)
        console.log('this.props', this.props)
        console.log('battle', this.props.battle)
        console.log('your mother')
        api.quickDrawRequest(this.props.battle);
        this.props.navigator.push({
          component: Winner,
          passProps: {
            user: this.props.user,
            battle: this.props.battle,
          }
        })
      } else {
        this.setState({velocitySum: sum});
      }
    });
    Accelerometer.startAccelerometerUpdates(); // you'll start getting AccelerationData events above
  }

  sumVelocity(accelerationChanges){
    var x = accelerationChanges[0].reduce(function(previousValue, currentValue){
      return Math.abs(previousValue) + Math.abs(currentValue)
    });
    var y = accelerationChanges[1].reduce(function(previousValue, currentValue){
      return Math.abs(previousValue) + Math.abs(currentValue)
    });
    var z = accelerationChanges[2].reduce(function(previousValue, currentValue){
      return Math.abs(previousValue) + Math.abs(currentValue)
    });
    return x + y + z
  }


  render() {

    return(
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.scoreHeadline}>Your Score:</Text>
            <Text style={styles.motionScore}>{Math.floor(this.state.velocitySum)}</Text>
            <View style={styles.bottomNav}>
              <SquareButton/>
              <SquareButton/>
            </View>
        </View>
      </View>
    )
  }
}





