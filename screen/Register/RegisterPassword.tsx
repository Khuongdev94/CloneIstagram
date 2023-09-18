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
import { isValidPassword } from "../../component/validate";
import Colors from "../../contants/Colors";
import FontSize from "../../contants/FontSize";
import { Ionicons } from "@expo/vector-icons";

export default function RegisterPassWord({ navigation }: { navigation: any }) {
  //kiểm tra dữ liệu
  const [errorPassword, setErrorPassword] = useState("");

  // lấy dữ liệu
  const [password, setPassword] = useState("");
  const [params, setParams] = useState<number[]>([]);
  const [secureText, setSecureText] = useState(true);

  const handleSecureText = () => {
    setSecureText(!secureText);
  };

  const handleX = (num: number) => {
    setParams([...params, num]);
    Alert.alert(JSON.stringify([...params, num]));
  };

  const handleY = () => {
    handleX(5);
  };

  const handleGetPassWord = (text: string) => {
    if (isValidPassword(text) == false) {
      setErrorPassword("Password must be at least 6 characters");
    } else {
      setErrorPassword("");
    }
    setPassword(text);
  };

  const handleSubmit = () => {
    const userPassWord = {
      password: password,
    };
    setPassword("");
    Keyboard.dismiss();
    console.log(userPassWord);
    setSecureText(true);
  };
  const isValidationOK = () =>
    password.length > 0 && isValidPassword(password) == true;
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
          <Text style={styles.title}>Creat a password</Text>
          <Text
            onPress={() => handleY()}
            style={(styles.h6, { color: "black", marginBottom: 10 })}
          >
            Create a password with at least 6 letters or numbers.It should be
            something others can't guess.
          </Text>
          <View
            style={{
              position: "relative",
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => handleGetPassWord(text)}
              value={password}
              secureTextEntry={secureText ? true : false}
            />
            <Ionicons
              style={styles.iconPassword}
              name={secureText ? "eye-sharp" : "eye-off-sharp"}
              size={22}
              color={"black"}
              onPress={handleSecureText}
            />
          </View>
          <Text style={styles.error}>{errorPassword}</Text>
        </View>
        <View style={[styles.blockLogin]}>
          <TouchableOpacity
            disabled={!isValidationOK() ? true : false}
            onPress={handleSubmit}
          >
            <Text
              style={{
                padding: 5,
                fontSize: FontSize.h5,
                color: "white",
              }}
              onPress={() => navigation.navigate("Main")}
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
    marginVertical: 30,
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
