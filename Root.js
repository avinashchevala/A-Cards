import {StyleSheet, Text, View} from "react-native";
import React from "react";
import InitialOptions from "./screens/InitialOptions";

const Root = () => {
  return (
    <View style={styles.root}>
     <InitialOptions />
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
  },
});
