import { AntDesign, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';


export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen 
        name='home'
        options={{
            tabBarIcon:()=>{
                <AntDesign  name="home" size={20} color="black" />
            },
        tabBarLabel: "home",
        headerTitle: "Home",
        }}
        />
        <Tabs.Screen
        name='deliveries'
        options={{
            tabBarIcon:()=>{
                <MaterialCommunityIcons name="truck-delivery" size={24} color="black" />
            },
            tabBarLabel:"Deliveries",
            headerTitle:"Deliveries"
        }}/>
        <Tabs.Screen 
        name='profile'
        options={{
            tabBarIcon:()=>{
                <EvilIcons name="user" size={24} color="black" />
            },
            tabBarLabel:"profile",
            headerTitle:"Profile"
        }}
        />
    </Tabs>
  );
}
