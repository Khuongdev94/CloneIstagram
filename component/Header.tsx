import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import FontSize from "../contants/FontSize";
interface IProps {
  onFilterLike: () => void;
  onNextScreen: () => void;
  like: boolean;
}

export default function Header({ onFilterLike, like, onNextScreen }: IProps) {
  const handleUserFilter = () => {
    onFilterLike();
  };
  const handleNextScreen = () => {
    onNextScreen();
  };
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Text style={styles.textHead}>Instagram</Text>
      </View>
      <View style={styles.blockIcon}>
        <Ionicons
          style={styles.iconPassword}
          name={like ? "heart-sharp" : "heart-outline"}
          size={26}
          color={like ? "red" : "blue"}
          onPress={handleUserFilter}
        />
        <Ionicons
          style={styles.iconPassword}
          name="search"
          size={26}
          color={"blue"}
          onPress={handleNextScreen}
        />
        <FontAwesome5
          style={styles.iconPassword}
          name="telegram-plane"
          size={26}
          color={"blue"}
        />
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
    marginBottom: 16,
  },
  textHead: {
    fontSize: FontSize.h1,
    fontWeight: "bold",
  },
  blockIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconPassword: {
    padding: 20,
  },
});
