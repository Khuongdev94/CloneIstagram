import React, { useState, useEffect } from "react";
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
import Colors from "../../contants/Colors";

export default function Search() {
  const [text, setText] = useState("");
  const handleGetText = (text: string) => {
    setText(text);
  };
  console.log(text);
  const userStory = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
      name: "Khuong",
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
      id: "5",
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
      id: "6",
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
      id: "7",
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
      id: "8",
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
    {
      id: "9",
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
      id: "10",
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
      id: "11",
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
      id: "12",
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
      id: "13",
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
      id: "14",
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
      id: "15",
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
      id: "16",
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
    {
      id: "17",
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
      id: "18",
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
      id: "19",
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
      id: "20",
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
      id: "21",
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
  ];
  const [dataFilter, setDataFilter] = useState(userStory);
  const filterUser = () => {
    return userStory.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
  };
  useEffect(() => {
    setDataFilter(filterUser());
  }, [text]);
  console.log(dataFilter);

  //   console.log(filterUser);
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

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={dataFilter}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center", margin: 2 }}>
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
      </View>
    </KeyboardAvoidingView>
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
  imgNewMain: {
    width: "100%",
    height: 460,
    resizeMode: "cover",
  },
});
