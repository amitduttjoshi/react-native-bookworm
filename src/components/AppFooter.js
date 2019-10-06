import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import custom components
import FooterButton from './FooterButton';

const AppFooter = ({total, reading, read}) => {
  return (
    <View style={[styles.headerFooterStyle, styles.appFooter]}>
      <FooterButton title="Total" cntVal={total} />
      <FooterButton title="Reading" cntVal={reading} />
      <FooterButton title="Read" cntVal={read} />
    </View>
  );
};

const styles = StyleSheet.create ({
  headerFooterStyle: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appFooter: {
    borderTopWidth: 0.5,
    borderTopColor: '#d9d9d9',
    backgroundColor: '#bbbbbb',
    flexDirection: 'row',
  },
});

componentDidUpdate = (prevProps, prevState) => {
  console.log (prevProps);
};

export default AppFooter;
