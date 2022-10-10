import React, {useEffect} from "react";
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import PushNotification from "react-native-push-notification";
import {requestUserPermission, NotificationListener} from './utils'

export const Notification = () =>{

  useEffect(()=>{
    createChannel()
    requestUserPermission()
    NotificationListener()
  },[])

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: "test-channel",
      channelName: "Test Channel"
    })
  }

  const handleNotification = (item) => {
    // console.log("ITEM ::>>", item)
      PushNotification.localNotification({
        channelId: "test-channel",
        title: item.name + ", You clicked!",
        message: "On some random text.",
      })
  }

  return(
    <View style={{flex:1}}>
        <FlatList
          data={Data}
          keyExtractor={(_,index)=> index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity 
            onPress={()=> handleNotification(item)}
            style={{width: '80%', height: 50, backgroundColor: '#FFF', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 25, borderRadius: 10}}>
              <Text style={{color: '#000'}}>{item.name}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{paddingTop: 50}}
        />
    </View>
  )
}

const Data = [
  {
    id:0,
    name: "Bunny"
  },
  {
    id:1,
    name: "Steve"
  }
]