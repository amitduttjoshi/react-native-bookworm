import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };

    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn = async () => {
    if (this.state.email && this.state.password) {
      this.setState({isLoading: true});
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
        if (response) {
          this.setState({isLoading: false});
          this.onSignIn(this.state.email, this.state.password);
        }
      } catch (err) {
        switch (err.code) {
          case 'auth/wrong-password':
            alert('Please enter the correct password.');
            break;
          case 'auth/user-not-found':
            alert('You are not registered. Please Sign up.');
            break;
          case 'auth/invalid-email':
            alert('Please enter the proper email.');
            break;
          default:
            console.log('Error on async call ', err);
            console.log('Error is ', err.code);
            break;
        }
        this.setState({isLoading: false});
      }
    } else {
      alert('Please enter the both email and password to login.');
      this.setState({isLoading: false});
    }
  };

  onSignUp = async () => {
    if (this.state.email && this.state.password) {
      this.setState({isLoading: true});
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
          );
        this.setState({isLoading: false});
      } catch (err) {
        if (err.code == 'auth/email-already-in-use') {
          alert('Email already in use, Please try logging in.');
        }
        console.log('Error on async call ', err);
        console.log('Error is ', err.code);
        this.setState({isLoading: false});
      }
    } else {
      alert('Please enter the both email and password to register.');
      this.setState({isLoading: false});
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2B3943',
        }}
      >
        {this.state.isLoading && (
          <View
            style={
              (StyleSheet.absoluteFill,
              {
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                elevation: 1000,
              })
            }
          >
            <ActivityIndicator size="large" color="#90aa11" />
          </View>
        )}
        <TextInput
          autoCapitalize="none"
          style={styles.textBox}
          keyboardType="email-address"
          onChangeText={text => this.setState({email: text})}
          placeholder="abc@example.com"
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textBox}
          placeholder="Enter password"
          onChangeText={text => this.setState({password: text})}
          secureTextEntry
        />
        <CustomActionButton
          label="Sign in"
          onPressAction={this.onSignIn}
          styles={styles.loginButton}
        />
        <CustomActionButton
          label="Sign up"
          onPressAction={this.onSignUp}
          styles={styles.loginButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: 'transparent',
    borderColor: '#dcdcdc',
    borderWidth: 0.5,
    color: '#121212',
    minWidth: '90%',
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    color: '#ffffff',
  },
});

export default LoginScreen;
