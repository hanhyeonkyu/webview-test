import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview'
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App() {
  const {height, width} = Dimensions.get("window")
  const [res, setRes] = useState('not arrive a message')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <WebView 
              source={{ uri: 'https://03e0e836.ngrok.io' }}
              style={{ height: height - 200 }}
            />
            <View>
              <Text style={styles.resText}>above is web area⬆️ bottom is app area⬇️</Text>
              <Text style={styles.resText}>{"from web response : " + res}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  resText: {
    textAlign: "center",
    marginBottom: 5
  }
});

export default App;
