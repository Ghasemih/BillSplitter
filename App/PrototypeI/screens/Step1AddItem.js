import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as itemsActions from '../items/items.actions';

export default class Step1AddItem extends React.Component {

    constructor(props){
      super(props)
      this.state = {
          itemName : "",
          price: 0.0,
      };
    }

    static navigationOptions = {
        title: "Step 1: Add All the Items",
    };

    render() {
        const {navigation} = this.props;
        return (
            
            <View style={styles.centeralign}>
                <Text style={styles.heading}>Step 1: Add All the Items</Text>
                
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
                title="Add Item to List"
                //helps in navigation to different screens
                onPress={() => {
                  itemsActions.addItem({
                    itemName: this.state.itemName,
                    price: this.state.price,
                    assignedPeople: [],
                    taxValue: 13,
                    tipValue: 10
                  });
                 this.props.navigation.navigate('Step1AddItem');
                  }
                }
                />

              <Button
                title="Finished adding Items!"
                //helps in navigation to different screens
                onPress={() => {
                  itemsActions.addItem({
                    itemName: this.state.itemName,
                    price: this.state.price,
                    assignedPeople: [],
                    taxValue: 13,
                    tipValue: 10
                  });
                 this.props.navigation.navigate('Step2AddPerson');
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
    },
    ImageContainer: {
      borderRadius: 1,
      width: 250,
      height: 250,
      borderColor: '#9B9B9B',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CDDC39'
    }
  });

//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 