import React, { Component } from 'react';
import { TextInput,SafeAreaView, StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {itemsStore} from '../items/items.store';
import * as itemsActions from '../items/items.actions';
import { ListItem } from 'react-native-ui-lib';
import {View as AnimatableView} from 'react-native-animatable';
import Constants from 'expo-constants';


const people = [
  {
  personName: "Person A",
  selected: false
  },
  {
  personName: "Person B",
  selected: false
  }
];

const items = [
  {
  id:1,
  itemName: "Item 1",
  price: 10,
  assignedPeople: ["Person A"],
  taxValue: 13,
  tipValue: 10
  },
  {
  id:2,
  itemName: "Item 2",
  price: 20,
  assignedPeople: ["Person A", "Person B"],
  taxValue: 13,
  tipValue: 10
  },
  {
    id:3,
    itemName: "Item 4",
    price: 20,
    assignedPeople: ["Person A", "Person B"],
    taxValue: 13,
    tipValue: 10
    },
  {
  id:4,
  itemName: "Item 3",
  price: 30,
  assignedPeople: ["Person B"],
  taxValue: 13,
  tipValue: 10
  }
];

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.itemName}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
}

function People({ person }) {
  return (
    <View style={styles.person}>
      <Text style={styles.title}>{person.personName}</Text>
      <Text style={styles.price}>{person.selected}</Text>
    </View>
  );
}
    // <ListItem
    //   activeOpactiy={0.1}
    //   onPress={() => console.log(item)}
    // >
    //   <ListItem.Part>
    //   <Text>{item.itemName}</Text>
    //   <Text>{item.price}</Text>
    //   </ListItem.Part>  
    // </ListItem>

function mapStateToItems() {
  return {
    items: itemsStore.getItems(),
    people: itemsStore.getPeople(),
  }
}


class BillScreen extends React.Component {

    state = {
        renderItems : [],
    };

    static propTypes = {
      componentId: PropTypes.string,
      items: PropTypes.array,
      people: PropTypes.array
    };
    
    componentDidMount(){
      itemsActions.fetchItems();
      itemsActions.fetchPerson();
      this.setState({renderItems : this.props.items})
    };

    static navigationOptions = {
        title: 'Bill Screen\t',
    };


    FlatListItemSeperator = () => {
      return(
      <View style={styles.line}></View>
      )
    };

    render() {
        const {navigation} = this.props;
        return ( 
          <View style={styles.centeralign}>

          <Text>{'\n\n'}</Text>
          
          <Text style={styles.subheading} >Your bill of items so far</Text>

          <SafeAreaView style={styles.container}>
          <FlatList
            data={this.props.items}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 0}}
            ItemSeparatorComponent={this.FlatListItemSeperator}
          />
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


          {/* <Button
          title='Go to Add Item Screen Page'
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('AddItem')}
          />

          <Button
          title='Go to Edit Item Screen Page'
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('EditItem')}
          />

          <Button
          title='Go to Add Person Screen Page'
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('AddPerson')}
          /> */}

          <Button
          title='Go to Step by Step Entry'
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('Step1AddItem')}
          />

          <Button
          title='Go to Summary Screen Page'
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('Summary')}
          />

          <Text>{'\n\n\n\n\n'}</Text>

          </View>                  
        );
    };
}


//navigation.getParam('name','default value')
const styles = StyleSheet.create({
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
    subheading: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 22,
      textAlign: 'center'
    },
    text: {
      color: 'black',
      fontSize: 15,
      textAlign: 'center'
    },
    price: {
      color: 'blue',
      fontSize: 20,
      textAlign: 'right'
    },
    inputBox: {
      height: 30,
      borderColor: 'black',
      borderBottomWidth: 1,
      width: '30%',
      textAlign: 'center'
    },
    ImageContainer: {
      borderRadius: 1,
      width: 250,
      height: 250,
      borderColor: '#9B9B9B',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CDDC39'
    },
    line: {
      height: 0.5,
      width: "100%",
      backgroundColor:"#000"
    },
    item: {
      backgroundColor: '#DCEDC8',
      padding: 5,
      marginVertical: 10,
      marginHorizontal: 10,
    },
    person:{
      backgroundColor: '#E1BEE7',
      padding: 5,
      marginVertical: 30,
      marginHorizontal: 5,  
    }

  });

export default connect(mapStateToItems)(BillScreen);
//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 
 /*{ <FlatList
            data = {this.props.items}
            ItemSeparatorComponent = {this.FlatListItemSeperator}
            renderItem={({item}) => <RenderItem item={item.itemName} />}
          //keyExtractor={item => item.itemName}
            // extraData={this.state}
          />
           }*/