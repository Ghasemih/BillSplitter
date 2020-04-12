import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as itemsActions from '../items/items.actions';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {itemsStore} from '../items/items.store';


function mapStateToItems() {
  return {
    items: itemsStore.getItems(),
    people: itemsStore.getPeople(),
  }
}


class SummaryScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allItems: [],
      allPeople: [],
    };
  }

  // state = {
  // }

  static propTypes = {
    componentId: PropTypes.string,
    items: PropTypes.array,
    people: PropTypes.array
  };

  componentDidMount(){
    itemsStoreFromCloud = itemsStore.getItems();
    peopleStoreFromCloud = itemsStore.getPeople();
    console.log(itemsStoreFromCloud);
    console.log(peopleStoreFromCloud);
    this.setState({allItems: itemsStoreFromCloud});
    this.setState({allPeople: this.props.people});
    this.convertPersonToItems();
  }

  convertPersonToItems() {
    console.log(this.state.allItems);
    console.log(this.state.allPeople);
  }

  static navigationOptions = {
    title: 'SummaryScreen\t',
  };

  static propTypes = {
    componentId: PropTypes.string,
    items: PropTypes.array,
    people: PropTypes.array
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.centeralign}>
        <Text style={styles.heading}>SummaryScreen</Text>
        <Button
          title='Go to BillScreen Page'
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('Bill')}
        />
      </View>
    )
  };

}

//navigation.getParam('name','default value')
const styles = StyleSheet.create({
  centeralign: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center'
  },
  inputBox: {
    height: 30,
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '30%',
    textAlign: 'center'
  }
});

export default connect(mapStateToItems)(SummaryScreen);
