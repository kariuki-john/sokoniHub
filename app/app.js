import { Link, router } from 'expo-router';
import React from 'react';

import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function app() {
  return (
    <View style= {styles.container}>
      <Text>hello there login</Text>
      <Link href={'./(tabs)/home'} asChild>
      <Pressable style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => {
              router.push('(tabs)/home')
            }}
          >
            Get started
          </Text>
      </Pressable>
      </Link>
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "gold",
    width: 200,
  },
});