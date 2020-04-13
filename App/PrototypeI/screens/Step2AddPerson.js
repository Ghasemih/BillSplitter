import React, { Component } from 'react';
import * as itemsActions from '../items/items.actions';
import SelectMultiple from 'react-native-select-multiple'
import {itemsStore} from '../items/items.store';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';

//UI Elements
import { TextInput, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const allItems = ['temp 1', 'temp 2']

export default class Step2AddPerson extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      person: null,
      selectedItems: [],
      itemsFromCloud: []
    };
  }

  static propTypes = {
    componentId: PropTypes.string,
    items: PropTypes.array
  };

  convertToItemNames(listOfItems) {
    // console.log(listOfItems);
    temp = [];
    listOfItems.map( (eachItem) => {
      // console.log(eachItem.itemName);
      temp.push(eachItem.itemName);
    });
    // temp.pop();
    this.setState({itemsFromCloud: temp});
    // console.log(temp);
  }

  componentDidMount(){
    itemStoreFromCloud = itemsStore.getItems(); 
    // console.log(itemStoreFromCloud);
    this.convertToItemNames(itemStoreFromCloud);
    // itemsStore.getItems();
    // this.convertToItemNames(this.props.items);
    // this.setState({ itemsFromCloud : itemsStore.getItems()});
  }

  onSelectionsChange = (selectedItems) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedItems });
    console.log(this.state.selectedItems);

  }

  static navigationOptions = {
    title: 'Step 2: Add Persons to the Bill\t',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.centeralign}>
        <Text>{'\n'}</Text>
        <Text style={styles.heading}>Step 2 : </Text>
        <Text style={styles.subheading}>Add People!</Text>  
        <Text>{'\n'}</Text> 
        
        <TextInput
          style={styles.inputBox}
          onChangeText={person => this.setState({ person })}
          placeholder="Enter Person's Name" />
      
      <Text>{'\n'}</Text> 

        <SafeAreaView style={styles.centeralign} > 
          <SelectMultiple
            items={this.state.itemsFromCloud}
            selectedItems={this.state.selectedItems}
            onSelectionsChange={this.onSelectionsChange} />
        </SafeAreaView>

      <Text>{'\n'}</Text> 

        <Button
          title='Assign Items to this Person!'
          //helps in navigation to different screens
          onPress={() => {
            itemsActions.addPerson({
              personName: this.state.person,
              selectedItems: this.state.selectedItems,
            });
            this.props.navigation.navigate('Bill')
          }
          }
        />

      <Text>{'\n \n \n \n'}</Text>              

      </View>
    )
  };

}

const styles = StyleSheet.create({
    centeralign: {
    flex: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25
  },
  heading: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center'
  },
  subheading: {
      color: 'black',
      fontSize: 22,
      textAlign: 'center'
  },
  button:{
    marginBottom: 50
  },
  text: {
    color: 'black',
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  text2: {
    color: 'black',
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  inputBox: {
    height: 30,
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '30%',
    textAlign: 'center'
  },
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerPeople: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center'
    },
    line: {
      height: 0.5,
      width: "100%",
      backgroundColor:"#000"
    },
    price: {
      color: 'blue',
      fontSize: 20,
      textAlign: 'center'
    },
    item: {
      backgroundColor: '#DCEDC8',
      padding: 15,
      marginVertical: 20,
      marginHorizontal: 10
    }
  });