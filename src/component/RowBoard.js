import { StyleSheet, View, Text } from "react-native";
import React from "react";
import ColumnBoard from "./ColumnBoard";

export default function RowBoard(props) {
  return (
    <View style={styles.row}>
      {props.cols.map((col, index) => {
        return <ColumnBoard key={index} col={col} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
