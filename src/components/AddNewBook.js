import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

const AddNewBook = ({showAddBook}) => {
  return (
    <TouchableOpacity style={styles.touchBtnToAdd} onPress={showAddBook}>
      <View style={styles.roundBtn}>
        <Feather style={styles.btnColor} name="plus" size={24} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  touchBtnToAdd: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  roundBtnWrapper: {},
  roundBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#123456',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnColor: {
    color: '#D2EEFC',
  },
});

export default AddNewBook;
