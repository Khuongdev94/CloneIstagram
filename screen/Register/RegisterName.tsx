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
import Colors from "../../contants/Colors";
import FontSize from "../../contants/FontSize";

export default function RegisterName() {
  //kiểm tra dữ liệu
  const [errorName, setErrorName] = useState("");
  // lấy dữ liệu
  const [name, setName] = useState("");

  const handleGetName = (text: string) => {
    if (!text) {
      setErrorName("Name invalid");
    } else {
      setErrorName("");
    }
    setName(text);
  };

  const handleSubmit = () => {
    const userName = {
      name: name,
    };
    setName("");
    Keyboard.dismiss();
    console.log(userName);
  };
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
          <Text style={styles.title}>What's your name?</Text>
          <Text style={(styles.h6, { color: "black" })}>
            Add your name so friends can find you.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            onChangeText={(text) => handleGetName(text)}
            value={name}
          />
          <Text style={styles.error}>{errorName}</Text>
        </View>
        <View style={[styles.blockLogin]}>
          <TouchableOpacity
            disabled={!name ? true : false}
            onPress={handleSubmit}
          >
            <Text
              style={{
                padding: 5,
                fontSize: FontSize.h5,
                color: "white",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
          <Text
            style={styles.h6}
            onPress={() => Alert.alert("to another screen")}
          >
            Already have an account?
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
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    color: Colors.secondary,
    fontSize: FontSize.h3,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h6: {
    color: Colors.primary,
    fontSize: FontSize.h6,
    marginBottom: 10,
  },
  input: {
    color: Colors.secondary,
    backgroundColor: "#FAFAFA",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  label: {
    color: Colors.primary,
    fontSize: FontSize.h5,
    alignSelf: "flex-end",
  },
  blockLogin: {
    backgroundColor: "#1373E6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },

  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});
