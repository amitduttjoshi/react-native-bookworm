import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppHeader = () => {
  return (
    <View style={[styles.headerFooterStyle, styles.appHeader]}>
      <Text style={styles.headerHeading}>Book Worm Application</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  headerFooterStyle: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appHeader: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
    backgroundColor: '#cccccc',
  },
  headerHeading: {
    fontSize: 25,
    alignSelf: 'center',
  },
});

export default AppHeader;
