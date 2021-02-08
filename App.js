import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Home from "./src/view/Home";
import store from "./src/store/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Home />
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4591C0",
    alignItems: "center",
    justifyContent: "center",
  },
});
