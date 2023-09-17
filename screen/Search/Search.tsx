import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import FontSize from "../../contants/FontSize";
import { userStory } from "../db";

interface FetchListPostParams {
  keyword?: string;
  isLike?: boolean;
}

export default function Search() {
  const [text, setText] = useState("");
  const [dataFilter, setDataFilter] = useState([...userStory]);
  const handleGetText = (text: string) => {
    setText(text);
  };
  const userFilter = () => {
    return userStory.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
  };
  useEffect(() => {
    const data = userFilter();
    setDataFilter([...data]);
  }, [text]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
      }}
      enabled={false}
    >
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
            paddingLeft: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={(text) => handleGetText(text)}
            />
            <Ionicons
              style={{ position: "absolute", top: 15, left: 10 }}
              name="search"
              size={18}
              color={"black"}
            />
          </View>
          <Ionicons
            style={styles.iconPassword}
            name="person-add"
            size={18}
            color={"black"}
          />
        </View>
        {dataFilter.length > 0 ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={dataFilter}
            contentContainerStyle={styles.container}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={{ flex: 1, paddingVertical: 2 }}>
                <Image
                  style={styles.imgUser}
                  source={{
                    uri: item.describe.urlPort,
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: FontSize.h3 }}>Not Found</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
  },
  blockIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconPassword: {
    marginHorizontal: 6,
    padding: 10,
  },
  input: {
    color: Colors.secondary,
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingLeft: 40,
    borderRadius: 16,
  },
  imgUser: {
    width: 133,
    height: 133,
    resizeMode: "cover",
  },
});
