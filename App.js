import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Feather} from '@expo/vector-icons';
import FooterButton from './src/components/FooterButton';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      totalCount: 30,
      totalReading: 20,
      totalRead: 10,
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.headerBackground} />
        <View style={[styles.headerFooterStyle, styles.appHeader]}>
          <Text style={styles.headerHeading}>Book Worm Application</Text>
        </View>
        <View style={styles.appBody} />
        <View style={[styles.headerFooterStyle, styles.appFooter]}>
          <FooterButton title="Total" cntVal={this.state.totalCount} />
          <FooterButton title="Reading" cntVal={this.state.totalReading} />
          <FooterButton title="Read" cntVal={this.state.totalRead} />
        </View>
        <SafeAreaView style={styles.footerBackground} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  headerBackground: {
    backgroundColor: '#454545',
  },
  footerBackground: {
    backgroundColor: '#a9a9a9',
  },
  appHeader: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
    backgroundColor: '#cccccc',
  },
  appBody: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  appFooter: {
    borderTopWidth: 0.5,
    borderTopColor: '#d9d9d9',
    backgroundColor: '#bbbbbb',
    flexDirection: 'row',
  },
  headerFooterStyle: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerHeading: {
    fontSize: 25,
    alignSelf: 'center',
  },
});

export default App;
