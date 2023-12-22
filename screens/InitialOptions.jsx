import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";

const InitialOptions = () => {
  return (
    <View style={styles.options}>
      <Text>Initial Options</Text>
    </View>
  );
};

export default InitialOptions;

const styles = StyleSheet.create({
  options: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
