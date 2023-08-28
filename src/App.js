import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Item from "./components/Item";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Shopping List</Text>

        {/* edit button */}

        {/* progress bar */}

        {/* items left */}
        <View style={styles.items}>
          <Item />
          <Item />
        </View>

        {/* items found */}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
