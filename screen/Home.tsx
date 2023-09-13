import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../contants/Colors";
import FontSize from "../contants/FontSize";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textHead}>Instagram</Text>
        </View>
        <View style={styles.blockIcon}>
          <Ionicons
            style={styles.iconPassword}
            name="heart-outline"
            size={26}
            color={"blue"}
          />
          <Ionicons
            style={styles.iconPassword}
            name="search"
            size={26}
            color={"blue"}
          />
          <FontAwesome5
            style={styles.iconPassword}
            name="telegram-plane"
            size={26}
            color={"blue"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    marginVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textHead: {
    fontSize: FontSize.h3,
  },
  blockIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconPassword: {
    marginHorizontal: 6,
    padding: 10,
  },
});
