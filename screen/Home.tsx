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
import { Ionicons, FontAwesome5, Entypo, AntDesign } from "@expo/vector-icons";

import Colors from "../contants/Colors";
import FontSize from "../contants/FontSize";
import Describe from "../component/Describe";
import PortHeader from "../component/PortHeader";
import Interact from "../component/Interact";
import Header from "../component/Header";
export default function Home() {
  const userStory = [
    {
      name: "tailor",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
      describe: {
        urlPort:
          "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
        numberLike: "2345 Likes",
        numberComment: 34,
        userComment: "thung",
        contentComment: " Are your ok ?",
      },
    },
    {
      name: "David",
      url: "https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2021/07/cach-chup-anh-chan-dung-nam-3.jpeg",
      describe: {
        urlPort:
          "https://media.istockphoto.com/id/1367807801/vi/vec-to/h%E1%BB%95-d%E1%BB%85-th%C6%B0%C6%A1ng-ch%C3%A2n-dung-h%C3%ACnh-vu%C3%B4ng-c%C6%B0%E1%BB%9Di-%C4%91%E1%BA%A7u-ho%E1%BA%A1t-h%C3%ACnh-khu%C3%B4n-m%E1%BA%B7t-%C4%91%E1%BB%99ng-v%E1%BA%ADt-h%C3%ACnh-tr%C3%B2n-h%C3%ACnh-minh.jpg?s=1024x1024&w=is&k=20&c=2Q2aBKpflGyZ-PEwQFpBRyVyI79xH7yzA98mtnp_1g8=",
        numberLike: "2344 Likes",
        numberComment: 234,
        userComment: "node",
        contentComment: " Are your ok ? happy ?",
      },
    },
    {
      name: "Jame",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
      describe: {
        urlPort:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg",
        numberLike: "129 Likes",
        numberComment: 15,
        userComment: "npm npx",
        contentComment: " Are your ok ? Close ?",
      },
    },
    {
      name: "dung",
      url: "https://kieutruong.com/wp-content/uploads/2020/11/thong-so-chup-anh-chan-dung.jpg",
      describe: {
        urlPort:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/579.jpg",
        numberLike: "129 Likes",
        numberComment: 15,
        userComment: "npm npx",
        contentComment: " Are your ok ? Close ?",
      },
    },
    {
      name: "sanches",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
      describe: {
        urlPort:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/908.jpg",
        numberLike: "129 Likes",
        numberComment: 15,
        userComment: "npm npx",
        contentComment: " Are your ok ? Close ?",
      },
    },
    {
      name: "Luis",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
      describe: {
        urlPort:
          "https://media.istockphoto.com/id/1159885960/vi/vec-to/phong-c%C3%A1ch-v%E1%BA%BD-tay-ho%E1%BA%A1t-h%C3%ACnh-c%C3%A1-s%E1%BA%A5u.jpg?s=1024x1024&w=is&k=20&c=bn-wnRiqoJDwatsKq-65ulu14A-ZjZkVimMHDc2XQew=",
        numberLike: "129 Likes",
        numberComment: 15,
        userComment: "npm npx",
        contentComment: " Are your ok ? Close ?",
      },
    },
    {
      name: "thor",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
      describe: {
        urlPort:
          "https://media.istockphoto.com/id/1159885960/vi/vec-to/phong-c%C3%A1ch-v%E1%BA%BD-tay-ho%E1%BA%A1t-h%C3%ACnh-c%C3%A1-s%E1%BA%A5u.jpg?s=1024x1024&w=is&k=20&c=bn-wnRiqoJDwatsKq-65ulu14A-ZjZkVimMHDc2XQew=",
        numberLike: "129 Likes",
        numberComment: 15,
        userComment: "npm npx",
        contentComment: " Are your ok ? Close ?",
      },
    },
    {
      name: "Ant",
      url: "https://mayanhhoangto.com/wp-content/uploads/2022/05/anh-chan-dung.jpg",
      describe: {
        urlPort:
          "https://phongvu.vn/cong-nghe/wp-content/uploads/2019/08/rule-of-thirds-composition-57dfc2d64ad27__880.jpg",
        numberComment: 15,
        numberLike: "129 Likes",
        userComment: "npm npx",
        contentComment: " Are your ok ? Close ?",
      },
    },
  ];
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
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
          <FontAwesome5
            style={styles.icon}
            name="plus-circle"
            size={18}
            color={"blue"}
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
      <FlatList
        data={userStory}
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
            <Interact />
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
