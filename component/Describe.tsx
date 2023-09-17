import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontSize from "../contants/FontSize";
interface IProps {
  numberLike: string;
  numberComment: number;
  userComment: string;
  contentComment: string;
}
export default function Describe({
  numberComment,
  numberLike,
  userComment,
  contentComment,
}: IProps) {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={styles.like}>{numberLike}</Text>
      <Text style={styles.like}>
        {userComment} <Text style={styles.numberComment}>{contentComment}</Text>
      </Text>
      <Text style={styles.numberComment}>View all {numberComment}</Text>
      <Text style={styles.like}>
        {userComment}
        <Text style={styles.numberComment}>{contentComment}</Text>
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
});
