import React, {
  PushNotificationIOS,
  AlertIOS
} from 'react-native';

module.exports = push = {
  sendNotification() {
    require('RCTDeviceEventEmitter').emit('remoteNotificationReceived', {
      aps: {
        alert: 'There\'s a challenger nearby!',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE'
      },
    });
  },
  onNotification(notification) {
    AlertIOS.alert(
      'Battleground',
      notification.getMessage(),
      [{
        text: 'See Challenger',
        // Navigate to our app on button press BattlePrompt
        onPress: null,
      }]
    );
  }
}
