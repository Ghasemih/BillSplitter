import React, { Component } from 'react';
import * as itemsActions from '../items/items.actions';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {itemsStore} from '../items/items.store';


//UI Elements
import { TextInput, StyleSheet, View, Image,SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function mapStateToItems() {
  return {
    items: itemsStore.getItems(),
    people: itemsStore.getPeople(),
  }
}

function People({ person }) {
  console.log(person);
  stringBuilder = "";
  sumValues = person.breakdownPrice.reduce((a,b) => a + b, 0)
  for (let i=0; i < person.selectedItems.length; i++){
    var num = person.breakdownPrice[i].toString();
    var currItemName = person.selectedItems[i];
    stringBuilder = stringBuilder + " " + currItemName + ": $" + num + "\n"; 
  }

  return (
    <View style={styles.person}>
      <Text style={styles.title}>{person.personName}</Text>
      <Text style={styles.title}>{stringBuilder}</Text>
      <Text style={styles.price}>{sumValues}</Text>
      
    </View>
  );
}

class SummaryScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allItems: [],
      allPeople: [],
    };
  }

  static propTypes = {
    componentId: PropTypes.string,
    items: PropTypes.array,
    people: PropTypes.array
  };

  componentDidMount(){
    // itemsStoreFromCloud = itemsStore.getItems();
    // peopleStoreFromCloud = itemsStore.getPeople();
    // console.log(itemsStoreFromCloud);
    // console.log(peopleStoreFromCloud);
    // this.setState({allItems: itemsStoreFromCloud});
    // this.setState({allPeople: this.props.people});
    this.convertPersonToItems();
  }

  convertPersonToItems() {
    itemsStoreFromCloud = itemsStore.getItems();
    peopleStoreFromCloud = itemsStore.getPeople();
    for (let i = 0; i < itemsStoreFromCloud.length; i++) {
      temp = [];
      currItemName = itemsStoreFromCloud[i].itemName;
      for (let j = 0; j < peopleStoreFromCloud.length; j++){
        if ( peopleStoreFromCloud[j].selectedItems.includes( currItemName )  ) {
          temp.push(peopleStoreFromCloud[j].personName);
        }

      }
      itemsStoreFromCloud[i].assignedPeople = temp;
    }

    itemsActions.setItems(itemsStoreFromCloud);
    // console.log(itemsStoreFromCloud); 
    
    for (let i = 0; i < peopleStoreFromCloud.length; i++){
      result = this.calculateListOfBreakdownPrice(peopleStoreFromCloud[i].selectedItems);
      peopleStoreFromCloud[i].breakdownPrice = result; 
    }

    itemsActions.setPeople(peopleStoreFromCloud);
    // console.log(peopleStoreFromCloud)
    // result1 = this.calculateListOfBreakdownPrice(peopleStoreFromCloud[0].selectedItems);
    // result2 = this.calculateListOfBreakdownPrice(peopleStoreFromCloud[1].selectedItems);

  }

  calculateListOfBreakdownPrice(selectedItems){
    itemsStoreFromCloud = itemsStore.getItems();
    temp = [];
    for (let i=0; i< selectedItems.length; i++){
      for (let j=0; j < itemsStoreFromCloud.length; j++){
        currItem = itemsStoreFromCloud[j];
        if ( selectedItems[i] === (currItem.itemName) ) {
          value = this.caculateBreakdownPrice(currItem);
          temp.push(value);
        }
      }
    }
    // console.log(selectedItems);
    // console.log(temp);
    return temp;
  }

  caculateBreakdownPrice(item){
    calculatedPrice = 0.0;
    calculatedPrice = item.price / (item.assignedPeople.length);
    return calculatedPrice;
  }

  static navigationOptions = {
    title: " Bill Summary ",
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

        <Text>{'\n'}</Text> 

        <Text style={styles.subheading}>A summary for your bill!</Text>

        <SafeAreaView style={styles.containerPeople}>
          <FlatList
            data={this.props.people}
            renderItem={({ item }) => <People person={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 10}}
          />
          </SafeAreaView>

      <Text>{'\n'}</Text> 

        <Button
          title='Go to BillScreen Page'
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('Bill')}
        />
        <Text>{'\n'}</Text> 
      </View>
    )
  };

}

//navigation.getParam('name','default value')
const styles = StyleSheet.create({
  centeralign: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25
  },
  containerPeople: {
    flex: 5,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 15
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
  subheading: {
      color: 'black',
      fontSize: 22,
      textAlign: 'center'
  },
  button:{
    marginBottom: 50
  },
  item: {
    backgroundColor: '#DCEDC8',
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  person:{
    backgroundColor: '#E1BEE7',
    padding: 5,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  price: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'right',
      alignItems: 'center',
    justifyContent: 'center'
  },
});

export default connect(mapStateToItems)(SummaryScreen);