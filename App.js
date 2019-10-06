import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Feather} from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/AppSwitchNavigator/WelcomeScreen';

const AppDrawerNavigator = createDrawerNavigator ({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: () => <Feather name="home" size={24} />,
    },
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
      drawerIcon: () => <Feather name="settings" size={24} />,
    },
  },
});

const LoginStackNavigator = createStackNavigator ({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignupScreen,
});

const AppSwitchNavigator = createSwitchNavigator ({
  LoginStackNavigator,
  AppDrawerNavigator,
});

const AppContainer = createAppContainer (AppSwitchNavigator);

const App = () => <AppContainer />;

export default App;
