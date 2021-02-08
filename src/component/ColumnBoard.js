import { StyleSheet, View, TextInput, Text } from "react-native";
import React, { useState } from "react";

export default function ColumnBoard(props) {
  const [val, setVal] = useState("" + props.col);

  function handleChange(e) {
    setVal(e.target.value);
  }

  let input;
  let editable;
  if (props.col !== 0) {
    input = styles.inputFalse;
    editable = false;
  } else if (props.col === 0) {
    input = styles.input;
    editable = true;
  } else {
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={input}
        value={val}
        onChange={handleChange}
        editable={editable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: "#FEFCFA",
    fontSize: 18,
    height: 30,
    width: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#154962",
  },
  inputFalse: {
    color: "#FEFCFA",
    fontSize: 18,
    height: 30,
    width: 30,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#A30303",
  },
});
