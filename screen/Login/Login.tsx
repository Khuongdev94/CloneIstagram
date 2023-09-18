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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../contants/Colors";
import FontSize from "../../contants/FontSize";
import { isValidPassword } from "../../component/validate";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login({ navigation }: { navigation: any }) {
  //kiểm tra dữ liệu
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  // lấy dữ liệu
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleSecureText = () => {
    setSecureText(!secureText);
  };
  const handleChangeName = (text: string) => {
    if (!text) {
      setErrorName("Name invalid");
    } else {
      setErrorName("");
    }
    setName(text);
  };
  const handleChangePassWord = (text: string) => {
    if (isValidPassword(text) == false) {
      setErrorPassword("Password must be at least 6 characters");
    } else {
      setErrorPassword("");
    }
    setPassword(text);
  };
  const isValidationOK = () =>
    name.length > 0 && password.length > 0 && isValidPassword(password) == true;

  // const handleSubmit = () => {
  //   const user = {
  //     name: name,
  //     password: password,
  //   };
  //   Keyboard.dismiss();
  //   setName("");
  //   setPassword("");
  //   navigation.navigate("RegisterName");
  // };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
      }}
      enabled={false}
    >
      <View style={styles.container}>
        <View style={styles.block}>
          <Ionicons
            style={styles.icon}
            name="close"
            size={30}
            color={"black"}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Instagram</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="PhoneNumber, username or Email"
              onChangeText={(text) => handleChangeName(text)}
              value={name}
            />
            <Text style={styles.error}>{errorName}</Text>
            <View
              style={{
                position: "relative",
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => handleChangePassWord(text)}
                value={password}
                secureTextEntry={secureText ? true : false}
              />
              <Ionicons
                style={styles.iconPassword}
                name={secureText ? "eye-sharp" : "eye-off-sharp"}
                size={22}
                color={"black"}
                onPress={() => handleSecureText()}
              />
            </View>
            <Text style={styles.error}>{errorPassword}</Text>
            <Text
              style={styles.label}
              onPress={() => Alert.alert("to another screen")}
            >
              Forgot password?
            </Text>
          </View>
        </View>
        <View style={[styles.blockLogin]}>
          <TouchableOpacity
            disabled={isValidationOK() === false}
            onPress={() => navigation.navigate("RegisterName")}
          >
            <Text
              style={{
                padding: 5,
                fontSize: FontSize.h3,
                color: "white",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.blockadd}>
          <View style={{ height: 1, backgroundColor: "#ECECEC", flex: 1 }} />
          <Text style={styles.textLink}>OR</Text>
          <View style={{ height: 1, backgroundColor: "#ECECEC", flex: 1 }} />
        </View>
        <View
          style={{
            flex: 0.15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Ionicons
              style={styles.icon}
              name="logo-facebook"
              size={24}
              color={"#58CCFD"}
            />
          </View>
          <Text
            style={{
              color: Colors.primary,
              fontSize: FontSize.h5,
              marginLeft: 5,
            }}
            onPress={() => Alert.alert("to another screen")}
          >
            Continue as ....
          </Text>
        </View>

        <View style={{ flex: 0.1 }}>
          <View style={{ height: 1, backgroundColor: "#ECECEC", flex: 1 }} />
          <Text style={styles.textLink}>
            Don't have an account ?
            <Text
              style={{
                color: Colors.primary,
                fontSize: FontSize.h5,
                marginLeft: 5,
              }}
              onPress={() => Alert.alert("to another screen")}
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 30,
  },
  block: {
    flex: 0.15,
    paddingVertical: 10,
  },
  icon: {
    alignSelf: "flex-end",
  },
  iconPassword: {
    position: "absolute",
    right: 5,
    top: 16,
    padding: 4,
  },
  main: {
    flex: 0.4,
  },
  title: {
    color: Colors.secondary,
    fontSize: FontSize.h2,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    color: Colors.secondary,
    backgroundColor: "#FAFAFA",
    padding: 15,
    borderRadius: 10,
  },
  label: {
    color: Colors.primary,
    fontSize: FontSize.h5,
    alignSelf: "flex-end",
  },
  blockLogin: {
    flex: 0.08,
    backgroundColor: "#58CCFD",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  blockadd: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textLink: {
    padding: 8,
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 4,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});
