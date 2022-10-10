/**
 * @format
 */

import {AppRegistry,Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification'
import messaging from '@react-native-firebase/messaging'

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});


PushNotification.configure({

  onRegister: async function (token) {
    console.log('REG TOKEN:', token);
    // await AsyncStorage.setItem('notification', token.token + "");
    // console.log('notificationTOKEN:', notification);
    // await AsyncStorage.setItem('notificationToken', token.token + '');
    // PushNotification.createChannel(
    //   {
    //     channelId: 'foreground-notificaiton', // (required)
    //     channelName: 'My channel', // (required)
    //     channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    //     playSound: false, // (optional) default: true
    //     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    //     importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    //     vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    //   },
    //   (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    // );
  },

    onNotification: function (notification) {
        console.log("NOTIFICATION ::>>", notification);
    
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
        // notification.finish(PushNotificationIOS.FetchResult.NoData); // For iOS
      },

    onAction: function(notificaiton){
      console.log("ACTION NOTI ::>>", notificaiton)
    }  
      //requestPermissions: Platform.OS === 'ios' //Local Notification for iOS
})

AppRegistry.registerComponent(appName, () => App);
