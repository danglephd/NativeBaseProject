import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppFontLoader } from './utils/FontLoader';
import AnatomyExample from './src/anatomy';

export default class App extends React.Component {
  render() {
    return (
      <AppFontLoader>
        <AnatomyExample></AnatomyExample>
      </AppFontLoader>

      // <AnatomyExample></AnatomyExample>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
