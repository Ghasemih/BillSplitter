import React, { Component } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import * as itemsActions from '../items/items.actions';
import SelectMultiple from 'react-native-select-multiple'
import {itemsStore} from '../items/items.store';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import Constants from 'expo-constants';

function mapStateToItems() {
  return {
    people: itemsStore.getPeople(),
  }
}

function People({ person }) {
  return (
    <View style={styles.person}>
      <Text style={styles.title}>{person.personName}</Text>
      {/* <Text style={styles.price}>{person.selectedItems}</Text> */}
    </View>
  );
}

class Step2AddPerson extends React.Component {

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
    temp = [];
    for (let i = 0; i < selectedItems.length ; i++){
      temp.push(selectedItems[i].value);
    }
    selectedItems = temp;
    this.setState({ selectedItems });
    // console.log(this.state.selectedItems);

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
            items={this.state.itemsFromCloud}
            selectedItems={this.state.selectedItems}
            onSelectionsChange={this.onSelectionsChange} />
        </SafeAreaView>

        <SafeAreaView style={styles.containerPeople}>
          <FlatList
            data={this.props.people}
            renderItem={({ item }) => <People person={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 0}}
            horizontal={true}
          />
          </SafeAreaView>


        <Button
          title=" Assign Items to this Person! "
          //helps in navigation to different screens
          onPress={() => {
            itemsActions.addPerson({
              personName: this.state.person,
              selectedItems: this.state.selectedItems,
              breakdownPrice: []
            });
            this.props.navigation.navigate('Step2AddPerson');
          }
          }
        />

        <Button
          title=" Finished "
          //helps in navigation to different screens
          onPress={() => {
            this.props.navigation.navigate('Bill');
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
  containerPeople: {
    flex: 2,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  person:{
    backgroundColor: '#E1BEE7',
    padding: 5,
    marginVertical: 30,
    marginHorizontal: 5,  
  },
  item: {
    backgroundColor: '#DCEDC8',
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  }
});

export default connect(mapStateToItems)(Step2AddPerson);
//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 