import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import Timer from './components/Timer'



export default class App extends React.Component {
  render() {
    return  <Timer/>
  } 
}
