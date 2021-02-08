import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, Button, View } from "react-native";
import RowBoard from "../component/RowBoard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoard, submit } from "../store/actions/action";

export default function Home() {
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(fetchBoard());
  }, []);

  function handleClick() {
    dispatch(submit());
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        SUDOKU {status}
        {"\n"}
      </Text>
      {board.map((cols, index) => {
        return <RowBoard key={index} cols={cols} />;
      })}

      <View style={styles.div}>
        <Button
          style={styles.submit}
          title="Learn More"
          color="#0A1406"
          onPress={handleClick}
        />
      </View>
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
  text: {
    color: "#FEFCFA",
    fontSize: 18,
  },
  div: {
    padding: 20,
  },
});
