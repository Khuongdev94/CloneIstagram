import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";

import FontSize from "../contants/FontSize";
import Describe from "../component/Describe";
import PortHeader from "../component/PortHeader";
import Header from "../component/Header";
import { userStory } from "./db";

interface FetchListPostParams {
  keyword?: string;
  isLike?: boolean;
  isGetOnlyLike?: boolean;
}

function fetchUserStory(params: FetchListPostParams) {
  const userIsLike = userStory.filter((item) => {
    if (params.keyword && !item.name.includes(params.keyword)) return false;
    if (params.isLike !== undefined && item.isLike !== params.isLike) {
      return false;
    }
    if (params.isGetOnlyLike === true && item.isLike === false) {
      return false;
    }
    return true;
  });
  return userIsLike;
}

export default function Home() {
  const [stories, setStories] = useState([...userStory]);
  const [like, setLike] = useState(false);

  const handleLike = (id: string) => {
    const story = stories.find((item) => item.id === id);
    if (!story) {
      console.warn("handleLike: Story not found");
      return;
    }
    story.isLike = !story.isLike;
    setStories([...stories]);
  };

  useEffect(() => {
    const data = fetchUserStory({ isGetOnlyLike: like });
    setStories([...data]);
  }, [like]);

  const handleFilterLike = (isGetOnlyLike: boolean) => {
    setLike(!isGetOnlyLike);
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header onFilterLike={() => handleFilterLike(like)} like={like} />
      {/* story */}
      <View style={styles.story}>
        <View style={{ marginRight: 5 }}>
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
          <View style={styles.icon}>
            <FontAwesome5 name="plus-circle" size={18} color={"blue"} />
          </View>
          <Text style={styles.userName}>Your Story</Text>
        </View>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 40,
            overflow: "hidden",
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
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
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      {/* News */}
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 18 }}>
            <PortHeader url={item.url} name={item.name}></PortHeader>
            <View>
              <Image
                style={styles.imgNewMain}
                source={{
                  uri: item.describe.urlPort,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 6,
              }}
            >
              <Ionicons
                style={styles.iconPassword}
                name={item.isLike ? "heart-sharp" : "heart-outline"}
                size={26}
                color={item.isLike ? "red" : "black"}
                onPress={() => handleLike(item.id)}
              />
              <AntDesign
                style={(styles.iconPassword, { textAlign: "right" })}
                name="message1"
                size={22}
                color={"black"}
              />
              <FontAwesome5
                style={styles.iconPassword}
                name="telegram-plane"
                size={26}
                color={"black"}
              />
              <Ionicons
                style={(styles.iconPassword, { flex: 1, textAlign: "right" })}
                name="bookmarks-outline"
                size={22}
                color={"black"}
              />
            </View>
            <Describe
              numberLike={item.describe.numberLike}
              numberComment={item.describe.numberComment}
              userComment={item.describe.userComment}
              contentComment={item.describe.contentComment}
            />
          </View>
        )}
        keyExtractor={(item) => item.name}
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
    padding: 6,
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
    right: 0,
    padding: 1,
    borderRadius: 20,
    overflow: "visible",
  },
});
