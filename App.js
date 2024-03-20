import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Category from './source/category';
import User from './source/user'


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Category /> */}
      <User
      apply='13'
      job='PR manager'
      area='IT depertment'
      date='2'
      amount='13'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // alignItems: 'center',
  },
});
