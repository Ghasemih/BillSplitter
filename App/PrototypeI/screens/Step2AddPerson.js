import React, { Component } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as itemsActions from '../items/items.actions';
import SelectMultiple from 'react-native-select-multiple'

const allItems = ['Item 1', 'Item 2', 'Item 3']

export default class Step2AddPerson extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      person: null,
      selectedItems: []
    };
  }

  // componentDidMount(){

  // }

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
        <Text style={styles.heading}>Step 2: Add Persons to the Bill</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={person => this.setState({ person })}
          placeholder="Enter Person's Name" />

        <SafeAreaView style={styles.centeralign} > 
          <SelectMultiple
            items={allItems}
            selectedItems={this.state.selectedItems}
            onSelectionsChange={this.onSelectionsChange} />
        </SafeAreaView>

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

//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 