import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../contants/Colors";
import FontSize from "../../contants/FontSize";

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "blue",
    fontSize: FontSize.h1,
    fontWeight: "bold",
  },
});
