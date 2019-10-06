import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomActionButton = ({onPressAction, styles}) => {
  return (
    <TouchableOpacity onPress={onPressAction}>
      <View style={styles}>
        <Text>Mark as Read</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomActionButton;
