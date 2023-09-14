import React, { useCallback, useState } from "react";
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
import Colors from "../contants/Colors";
import FontSize from "../contants/FontSize";
interface IProps {
  numberLike: string;
  numberComment: number;
  userComment: string;
  contentComment: string;
}
export default function Describe(props: IProps) {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={styles.like}>{props.numberLike}</Text>
      <Text style={styles.numberComment}>
        View all {props.numberComment} comments
      </Text>
      <Text style={styles.like}>
        {props.userComment}{" "}
        <Text style={styles.numberComment}>{props.contentComment}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  like: {
    fontSize: FontSize.h5,
    fontWeight: "600",
  },
  numberComment: {
    fontSize: FontSize.h6,
    fontWeight: "400",
  },
  content: {
    fontSize: FontSize.h6,
    fontWeight: "600",
  },
});
