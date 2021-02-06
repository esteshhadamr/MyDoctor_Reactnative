import React from "react";
import { AppLoading } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Font from 'expo-font';
import AppNavigation from './config/routes';
import { LogBox } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    }
    
  }

  async UNSAFE_componentWillMount() {
    await Permissions.askAsync(Permissions.LOCATION);
    LogBox.ignoreAllLogs(true);

  }

  //Load nativebase fonts
  async _getFonts() {
    await Font.loadAsync({
      'noto-font': require('./assets/fonts/NotoKufiArabic-Regular.ttf')
    })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading startAsync={this._getFonts} onFinish={() => this.setState({ isReady: true })} />
      )
    }
    return <AppNavigation />
  }
}

