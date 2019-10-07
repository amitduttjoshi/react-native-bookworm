import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomActionButton = ({onPressAction, styles, label}) => {
  return (
    <TouchableOpacity onPress={onPressAction}>
      <View style={[styles, inlineStyles.loginButton]}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const inlineStyles = StyleSheet.create({
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomActionButton;
