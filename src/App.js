import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Item from "./components/Item";
import { useState } from "react";

export default function App() {
  const [item, setItem] = useState();
  const [itemsLeft, setItemsLeft] = useState([]);
  const [itemsFound, setItemsFound] = useState([]);

  const handleAddItem = () => {
    Keyboard.dismiss();
    setItemsLeft([...itemsLeft, item]);
    setItem(null);
    console.log(item);
  };

  const checkItem = (index) => {
    let itemsCopy = [...itemsLeft];
    setItemsFound([...itemsFound, itemsLeft[index]]);
    itemsCopy.splice(index, 1);
    setItemsLeft(itemsCopy);
  };

  const uncheckItem = (index) => {
    let itemsCopy = [...itemsFound];
    setItemsLeft([...itemsLeft, itemsFound[index]]);
    itemsCopy.splice(index, 1);
    setItemsFound(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Shopping List */}
      <View style={styles.content}>
        <Text style={styles.title}>Shopping List</Text>

        {/* edit button */}

        {/* progress bar */}

        {/* items left */}
        <View style={styles.items}>
          <Text style={styles.h1}>Items Left</Text>
          {itemsLeft.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => checkItem(index)}>
                <Item name={item} amount={1} />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* items found */}
        <View style={styles.items}>
          <Text style={styles.h1}>Items Found</Text>
          {itemsFound.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => uncheckItem(index)}>
                <Item name={item} amount={1} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Write A Item */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeItemWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Add an Item"
          value={item}
          onChangeText={(text) => setItem(text)}
        />

        <TouchableOpacity onPress={() => handleAddItem()}>
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
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
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
  h1: {
    fontSize: 18,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    width: 250,
  },
  items: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  writeItemWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
