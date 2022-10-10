import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const requestUserPermission =  async() =>{
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetToken()
  }
}

async function GetToken(){
    let token =await AsyncStorage.getItem("fcmtoken")
    console.log("Old token ::>>",token)

    if(!token){
       try{
        let token = await messaging().getToken()
        if(token){
            console.log("New token ::>>", token)
            await AsyncStorage.setItem("fcmtoken",token)
        }else{

        }
       } catch(e){
        console.log("FCM ERROR ::>", e)
       }
    }
}

export const NotificationListener = () => {
        // Assume a message-notification contains a "type" property in the data payload of the screen to open
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
              'Notification caused app to open from background state:',
              remoteMessage.notification,
            );
            // navigation.navigate(remoteMessage.data.type);
          });
      
          // Check whether an initial notification is available
          messaging()
            .getInitialNotification()
            .then(remoteMessage => {
              if (remoteMessage) {
                console.log(
                  'Notification caused app to open from quit state:',
                  remoteMessage.notification,
                );
              }
            });

            messaging().onMessage(async remoteMessage =>{
                console.log("notification on foreground state....", remoteMessage)
            })

}

