import React from 'react';

import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createNavigationReducer, reduxifyNavigator } from 'react-navigation-redux-helpers';

import HomeScreen from '../screens/home';
import FullViewScreen from '../screens/FullScreenView'


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  FullView: {
    screen: FullViewScreen,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});

export const navigationReducer = createNavigationReducer(AppNavigator);

export const getAppNavigationWithState = () => {
  const App = reduxifyNavigator(AppNavigator, 'root');
  const mapStateToProps = state => ({ state: state.nav });
  const AppWithNavigationState = connect(mapStateToProps)(App);
  return AppWithNavigationState;
};

export default createAppContainer(AppNavigator);