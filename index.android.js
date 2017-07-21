/* @flow */

'use strict';

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import App from './src/index';
import configureStore from './src/store/configure-store';

const store = configureStore();

class wipayfinancial extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('wipayfinancial', () => wipayfinancial);
