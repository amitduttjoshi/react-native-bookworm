import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomActionButton from '../components/CustomActionButton';

class SettingsScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View style={styles.settingsWrapper}>
        <CustomActionButton
          label="Logout"
          onPressAction={() => {
            this.props.navigation.navigate ('WelcomeScreen');
          }}
          styles={styles.signupButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
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
