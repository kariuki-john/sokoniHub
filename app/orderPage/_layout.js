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
                headerTitleAlign: "center",
                headerShown:false
            }}>
        </Stack>
    )
}