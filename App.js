import React, {useEffect} from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Notification} from './src/notification'
import {Second} from './src/second'

const Stack = createStackNavigator()

export default function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="second" component={Second} options={{headerShown: false}}/>
        <Stack.Screen name="noti" component={Notification} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}