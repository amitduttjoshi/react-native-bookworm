import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signOut = async () => {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate('WelcomeScreen');
    } catch (err) {
      alert('Unable to signout' + err.code);
      console.log(err.code);
    }
  };

  render() {
    return (
      <View style={styles.settingsWrapper}>
        <CustomActionButton
          label="Logout"
          onPressAction={() => this.signOut()}
          styles={styles.signupButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButton: {
    alignSelf: 'center',
  },
});

export default SettingsScreen;
