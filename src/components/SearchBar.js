import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({bookName, onChange, onSave, hideAddForm, isVisible}) => {
  return (
    isVisible &&
    <View style={styles.searchBarPanel}>
      <TextInput
        style={styles.textBox}
        placeholder="Enter Search Term"
        placeholderTextColor="#454545"
        onChangeText={text => onChange (text)}
      />
      <TouchableOpacity
        style={styles.touchableSearch}
        onPress={onSave}
        disabled={bookName.length <= 0 ? true : false}
      >
        <View style={styles.searchButton}>
          <Feather name="check" style={styles.searchIcon} size={25} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableSearch} onPress={hideAddForm}>
        <View style={styles.cancelButton}>
          <Feather name="delete" style={styles.cancelIcon} size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create ({
  searchBarPanel: {
    height: 50,
    flexDirection: 'row',
  },
  searchIcon: {
    color: '#FFFFFF',
  },
  cancelIcon: {
    color: '#FFFFFF',
  },
  textBox: {
    backgroundColor: '#dcdcdc',
    color: '#121212',
    flex: 1,
    padding: 5,
  },
  touchableSearch: {},
  searchButton: {
    width: 50,
    backgroundColor: '#00CC00',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  cancelButton: {
    width: 50,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});

export default SearchBar;
