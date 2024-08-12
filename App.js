import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [action, setAction] = useState("Welcome to the button counter");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>{action}</Text>

        <Text>Current number :</Text>
        <Text>{number}</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.buttons} onPress={takeAwayNumber}>
            <Text>-1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={resetNumber}>
            <Text>Reser Number</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={addNumber}>
            <Text>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );

  function addNumber() {
    setNumber(number + 1);
    setAction("You just added +1 to the number!");
    console.log("+1 to number");
  }

  function takeAwayNumber() {
    setNumber(number - 1);
    setAction("You just took away 1 of the number!");
    console.log("-1 to number");
  }

  function resetNumber() {
    setNumber(0);
    setAction("You did just reset the number!");

    console.log("number reset");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttons: {
    padding: "5px",
    backgroundColor: "#FFCAD4",
    borderWidth: 1,
    borderRadius: 5,
    margin: "5px",
  },
  box: {
    backgroundColor: "#D8E2DC",
    borderWidth: 1,
    borderRadius: 10,
    padding: "10px",
    alignItems: "center",
  },
});
