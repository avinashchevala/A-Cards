import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Root from './Root';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
        <Root />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("Cards", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
