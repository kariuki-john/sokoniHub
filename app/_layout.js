import { Stack } from 'expo-router';
import React from 'react';


export default function _layout() {
  return (
   <Stack 
   screenOptions={{
    headerStyle: {
      backgroundColor: "red",
    },
    headerTintColor: "white",
    headerTitleAlign:"center"
  }}>
    <Stack.Screen
    name='app'
    options={{
      headerTitle:"Login",
    }}
    />
    <Stack.Screen
    name="(tabs)"
    options={{
      headerShown:false,
    }}
    />
   </Stack>
  );
}
