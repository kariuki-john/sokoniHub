import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Pressable, ScrollView, Text } from "react-native";

const PlaceholderImage = require("../../assets/images/deliver.jpg");

export default function componentName() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <ScrollView style={styles.items} horizontal>
        <View >
          <Pressable
            style={styles.cards}
          ><Link href="/orderPage/chicken" style={{ color: "red" }} >Poultry</Link>
          </Pressable>
        </View>

        <View >
          <Pressable
            style={styles.cards}
          ><Link href="/orderPage/honey" style={{ color: "red" }}>Honey & Bee keeping</Link>
          </Pressable>
        </View>

        <View >
          <Pressable
            style={styles.cards}
          ><Link href="/orderPage/milk" style={{ color: "red" }}>Milk</Link>
          </Pressable>
        </View>

        <View >
          <Pressable
            style={styles.cards}
          ><Link href="/orderPage/farm" style={{ color: "red" }}>Farm inputs</Link>
          </Pressable>
        </View>

        <View >
          <Pressable
            style={styles.cards}
          ><Link href="/orderPage/others" style={{ color: "red" }}>Other inputs</Link>
          </Pressable>
        </View>
        <View >
          <Pressable
            style={styles.cards}
          ><Link href="/orderPage/pigs" style={{ color: "red" }}>Pig Farming</Link>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: 1,
    width: "auto",
  },
  image: {
    width: "auto",
    height: 250,
    borderRadius: 18,
  },
  cards: {
    width: 150,
    height: 105,
    margin: 8,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    padding: 35,
    justifyContent: "center",

  },
  items: {
    padding: 8,
    flexWrap: 'wrap',
    height: 300,
    width: 'auto',
    backgroundColor: 'green',
    alignContent: 'flex-start'
  },

});
