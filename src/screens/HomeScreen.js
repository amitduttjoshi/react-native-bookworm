import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
  Image,
} from 'react-native';

// import custom components
import AddNewBook from '../components/AddNewBook';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import FooterButton from '../components/FooterButton';
import SearchBar from '../components/SearchBar';
import CustomActionButton from '../components/CustomActionButton';

class HomeScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      totalCount: 0,
      totalReading: 0,
      totalRead: 0,
      isAddNewBookVisible: false,
      newBookName: '',
      books: [],
      firstTime: 0,
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

  markAsRead = item => {
    let newList = this.state.books.filter (book => book.id !== item.id);
    this.setState (prevState => ({
      books: newList,
      totalReading: prevState.totalReading - 1,
      totalRead: prevState.totalRead + 1,
    }));
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
      totalCount: this.state.totalCount + 1,
      totalReading: this.state.totalReading + 1,
    });
    this.setState ({newBookName: ''});
    this.hideAddNewBook ();
  };

  renderItem = item => (
    <View style={styles.bookRow}>
      <Image source={{uri: item.image}} style={styles.bookRowImage} />
      <View style={styles.bookRowHeading}>
        <Text>{item.bookName}</Text>
      </View>
      <CustomActionButton
        onPressAction={() => this.markAsRead (item)}
        styles={styles.bookMarkAsReadBtn}
        label="Mark as read"
      />
    </View>
  );

  setNewBookName = bookName => {
    this.setState ({newBookName: bookName});
  };

  render () {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.headerBackground} />
        <AppHeader />
        <SearchBar
          bookName={this.state.newBookName}
          onChange={text => this.setNewBookName (text)}
          hideAddForm={this.hideAddNewBook}
          isVisible={this.state.isAddNewBookVisible}
          onSave={this.saveNewBook}
        />
        <View style={styles.appBody}>
          <FlatList
            data={this.state.books}
            keyExtractor={book => `key${book.id}`}
            renderItem={({item}) => this.renderItem (item)}
            ListEmptyComponent={
              <View style={styles.noBooksAtm}>
                <Text>Not reading any books at the moment</Text>
              </View>
            }
          />
          <AddNewBook showAddBook={this.showAddNewBook} />
        </View>
        <AppFooter
          total={this.state.totalCount}
          reading={this.state.totalReading}
          read={this.state.totalRead}
        />
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
  appBody: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  noBooksAtm: {
    alignItems: 'center',
    height: 50,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  bookRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.5,
    backgroundColor: '#EEEEEE',
  },
  bookRowImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bookRowHeading: {
    height: 50,
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
  },
  bookMarkAsReadBtn: {
    width: 100,
    height: 50,
    backgroundColor: '#ae12dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
