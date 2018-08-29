/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import allReducers from './src/reducers';
import CounterContainer from './src/containers/CounterContainer';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';

//Middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));







const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);


export default class AppSaga extends Component {
  render() {
      return <App/>;
  }
}

sagaMiddleware.run(rootSaga); //Chạy xuyên suốt các hàm rootSaga trong app 
