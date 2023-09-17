import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
  iconPassword: {
    marginHorizontal: 6,
    padding: 10,
  },
  imgNews: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: "cover",
  },
});
