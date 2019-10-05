import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FooterButton extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <View style={styles.footerBtn}>
        <Text style={styles.btnFooterHeading}>{this.props.title}</Text>
        <Text style={styles.btnFooterSubHeading}>
          {this.props.cntVal}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  footerBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFooterHeading: {
    fontSize: 20,
    color: '#454545',
  },
  btnFooterSubHeading: {
    fontSize: 14,
    color: '#0066AA',
  },
});

export default FooterButton;
