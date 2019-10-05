import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import FooterButton from './src/components/FooterButton';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      totalCount: 30,
      totalReading: 20,
      totalRead: 10,
      isAddNewBookVisible: false,
      newBookName: '',
      books: [],
    };
  }
  showAddNewBook = () => {
    this.setState ({
      isAddNewBookVisible: true,
    });
  };
  hideAddNewBook = () => {
    this.setState ({
      isAddNewBookVisible: false,
    });
  };

  saveNewBook = () => {
    this.setState ({
      books: [
        ...this.state.books,
        {
          id: Math.floor (Math.random () * 9999),
          image: 'https://dummyimage.com/400x400/f00/fff',
          bookName: this.state.newBookName,
        },
      ],
    });
    this.setState ({newBookName: ''});
    this.hideAddNewBook ();
    console.log (this.state.books);
  };

  componentDidUpdate () {
    console.log (this.state.newBookName);
    console.log (this.state.books);
  }

  render () {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.headerBackground} />
        <View style={[styles.headerFooterStyle, styles.appHeader]}>
          <Text style={styles.headerHeading}>Book Worm Application</Text>
        </View>
        {this.state.isAddNewBookVisible &&
          <View style={styles.searchBarPanel}>
            <TextInput
              style={styles.textBox}
              autoCapitalize="none"
              placeholder="Enter Search Term"
              placeholderTextColor="#454545"
              onChangeText={text => {
                this.setState ({newBookName: text});
              }}
            />
            <TouchableOpacity
              style={styles.touchableSearch}
              onPress={this.saveNewBook}
              disabled={this.state.newBookName.length <= 0 ? true : false}
            >
              <View style={styles.searchButton}>
                <Feather name="check" style={styles.searchIcon} size={25} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableSearch}
              onPress={this.hideAddNewBook}
            >
              <View style={styles.cancelButton}>
                <Feather name="delete" style={styles.cancelIcon} size={25} />
              </View>
            </TouchableOpacity>
          </View>}
        <View style={styles.appBody}>
          <TouchableOpacity
            style={styles.touchBtnToAdd}
            onPress={this.showAddNewBook}
          >
            <View style={styles.roundBtn}>
              <Feather style={styles.btnColor} name="plus" size={24} />
            </View>
          </TouchableOpacity>
        </View>
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
  touchBtnToAdd: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  searchBarPanel: {
    height: 50,
    flexDirection: 'row',
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
  searchIcon: {
    color: '#FFFFFF',
  },
  cancelIcon: {
    color: '#FFFFFF',
  },
});

export default App;
