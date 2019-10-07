import React, {Component} from 'react';
import {View, Text} from 'react-native';
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
      <View>
        <Text> LoadingScreen </Text>
      </View>
    );
  }
}

export default LoadingScreen;
