import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Button,
  Alert,
} from 'react-native';
import { WebView } from 'react-native-webview'
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {

  public webViewRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      res: 'not arrive a message'
    }
  }

  onMessage = (event: any) => { this.setState({ res: event.nativeEvent.data }) }
  reqToWeb = () => { this.webViewRef.postMessage("this message from app"); }

  render() {
    const { res }: any = this.state
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <WebView
                ref={(ref) => { this.webViewRef = ref }}
                source={{ uri: 'https://3f8b744d.ngrok.io' }}
                originWhitelist={["*"]}
                style={styles.webview}
                onMessage={this.onMessage}
              />
              <View>
                <Text style={styles.resText}>above is web area⬆️ bottom is app area⬇️</Text>
                <Text style={styles.resText}>{"from web response : " + res}</Text>
                <Button title="Req to Web" onPress={this.reqToWeb} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  resText: {
    textAlign: "center",
    marginBottom: 5
  },
  webview: {
    height: Dimensions.get("window").height - 200
  }
});

export default App;
