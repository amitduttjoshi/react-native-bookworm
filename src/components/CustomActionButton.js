import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomActionButton = ({onPressAction, styles, label}) => {
  return (
    <TouchableOpacity onPress={onPressAction}>
      <View style={styles}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomActionButton;
