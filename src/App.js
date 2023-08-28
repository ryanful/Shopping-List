import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Item from "./components/Item";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Shopping List */}
      <View style={styles.content}>
        <Text style={styles.title}>Shopping List</Text>

        {/* edit button */}

        {/* progress bar */}

        {/* items left */}
        <View style={styles.items}>
          <Item name={"Banana"} amount={1} />
          <Item name={"Apple"} amount={2} />
        </View>

        {/* items found */}
      </View>

      {/* Write A Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder="Add an Item" />

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  addText: {},
  addWrapper: {},
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  input: {},
  items: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
