import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import Timer from './components/Timer';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Timer/>
      </Provider>
    );
  } 
}
