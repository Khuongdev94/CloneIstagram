import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Colors from "../contants/Colors";
import FontSize from "../contants/FontSize";

interface IProps {
  url: string;
  name: string;
}
export default function PortHeader(props: IProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 6 }}>
      <Image
        style={styles.imgNews}
        source={{
          uri: props.url,
        }}
      />
      <Text style={{ marginLeft: 14 }}>{props.name}</Text>
      <Entypo
        style={(styles.iconPassword, { flex: 1, textAlign: "right" })}
        name="dots-three-horizontal"
        size={22}
        color={"black"}
      />
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
    marginBottom: 16,
  },
  textHead: {
    fontSize: FontSize.h2,
  },
  blockIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconPassword: {
    marginHorizontal: 6,
    padding: 10,
  },
  story: {
    flexDirection: "row",
    marginBottom: 24,
  },
  userName: {
    fontSize: FontSize.h6,
    textAlign: "center",
  },
  imgUser: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: "cover",
  },
  imgNews: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: "cover",
  },
  imgNewMain: {
    width: "100%",
    height: 460,
    resizeMode: "cover",
  },
  icon: {
    position: "absolute",
    top: 34,
    right: 5,
    backgroundColor: "white",
    padding: 2,
    borderRadius: 16,
  },
});
