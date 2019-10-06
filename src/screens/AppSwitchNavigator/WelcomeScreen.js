import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

import CustomActionButton from '../../components/CustomActionButton';

class WelcomeScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.loginView}>
          <Feather name="book" size={150} style={styles.iconLogoStyle} />
          <Text style={styles.logoHeading}>Book Worm</Text>
        </View>
        <View style={styles.buttonsView}>
          <CustomActionButton
            label="Sign in"
            onPressAction={() => {
              this.props.navigation.navigate ('HomeScreen');
            }}
            styles={styles.loginButton}
          />
          <CustomActionButton
            label="Sign up"
            onPressAction={() => {
              this.props.navigation.navigate ('SignupScreen');
            }}
            styles={styles.signupButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  flexFull: {
    flex: 1,
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: '#2B3943',
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLogoStyle: {
    color: '#21991a',
  },
  logoHeading: {
    fontWeight: 'bold',
    fontSize: 70,
  },
  signupButton: {
    borderColor: '#909090',
    borderWidth: 0.5,
    backgroundColor: '#454545',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f1f4f5',
    width: 200,
    height: 50,
    margin: 5,
  },
  loginButton: {
    borderColor: '#909090',
    borderWidth: 0.5,
    backgroundColor: '#454545',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f1f4f5',
    width: 200,
    height: 50,
    margin: 5,
  },
});

export default WelcomeScreen;
