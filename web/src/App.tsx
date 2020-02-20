import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      res: 'not arrive a message'
    }
  }
  componentDidMount() {
    document.addEventListener('message', this.eventHandler);
  }
  componentWillUnmount() {
    document.removeEventListener('message', this.eventHandler);
  }
  reqToApp = () => {
    const javascriptInject = `
      window.ReactNativeWebView.postMessage('I have just arrived from web');
    `;
    return javascriptInject
  }
  eventHandler = (event: any) => {
    this.setState({res: event.data})
  }

  render() {
    const { res }: any = this.state

    return (
      <div className="App">
        <div className="headers">The the the ...</div>
        <div className="contents">
          <button className="reqbtn" onClick={this.reqToApp}>
            Req to App
          </button>
        </div>
        <div className="footer">{"from app response : " + res}</div>
      </div>
    );
  }
}

export default App;
