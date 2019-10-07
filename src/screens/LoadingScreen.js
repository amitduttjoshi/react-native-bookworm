import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.checkedIfLoggedIn();
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  checkedIfLoggedIn = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('HomeScreen');
      } else {
        this.props.navigation.navigate('LoginStackNavigator');
      }
    });
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#90aa11" />
      </View>
    );
  }
}

export default LoadingScreen;
