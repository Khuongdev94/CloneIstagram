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
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../contants/Colors";
import FontSize from "../contants/FontSize";
export default function Home() {
  const userStory = [
    {
      name: "tailor",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
    },
    {
      name: "David",
      url: "https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2021/07/cach-chup-anh-chan-dung-nam-3.jpeg",
    },
    {
      name: "Jame",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
    },
    {
      name: "dung",
      url: "https://kieutruong.com/wp-content/uploads/2020/11/thong-so-chup-anh-chan-dung.jpg",
    },
    {
      name: "sanches",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
    },
    {
      name: "Luis",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
    },
    {
      name: "thor",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
    },
    {
      name: "Ant",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
    },
  ];
  return (
    <View style={styles.container}>
      {/* header */}
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
      {/* story */}
      <View style={styles.story}>
        <View>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            }}
            resizeMode="cover"
          />
          <FontAwesome5
            style={{ position: "absolute", top: 34, right: 5 }}
            name="plus-circle"
            size={18}
            color={"red"}
          />
          <Text style={styles.userName}>Your Story</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={userStory}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={{ alignItems: "center", marginHorizontal: 14 }}>
                <Image
                  style={styles.imgUser}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text style={styles.userName}>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
      {/* bảng tin */}
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
});
