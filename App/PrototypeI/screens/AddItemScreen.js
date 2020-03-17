import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as itemsActions from '../items/items.actions';

export default class AddItemScreen extends React.Component {

    constructor(props){
      super(props)
      this.state = {
          itemName : "",
          price: 0.0,
      };
    }

    static navigationOptions = {
        title: "AddItemScreen",
    };

    render() {
        const {navigation} = this.props;
        return (
            
            <View style={styles.centeralign}>
              <Text style={styles.heading}>AddItemScreen</Text>
              
              <TextInput
              style={styles.inputBox}
              onChangeText={itemName => this.setState({itemName})}
              placeholder="Enter Item Name" />
                
              <TextInput
              style={styles.inputBox}
              onChangeText={price => this.setState({price})}
              placeholder="Enter Item Price" 
              keyboardType="number-pad"  
              returnKeyType='done'   />    
                
              <Button
              title="Go to BillScreen Page"
              //helps in navigation to different screens
              onPress={() => {
                itemsActions.addItem({
                  itemName: this.state.itemName,
                  price: this.state.price,
                  assignedPeople: [],
                  taxValue: 13,
                  tipValue: 10
                });
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
    heading: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 30,
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