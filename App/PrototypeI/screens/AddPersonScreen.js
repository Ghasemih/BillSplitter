import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as itemsActions from '../items/items.actions';

export default class AddPersonScreen extends React.Component {

    constructor(props){
      super(props)
      this.state = {
          person : null,
      };
    }

    // componentDidMount(){

    // }

    static navigationOptions = {
        title: 'AddPersonScreen\t',
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.centeralign}>
                <Text style={styles.heading}>AddPersonScreen</Text>
                
                <TextInput
              style={styles.inputBox}
              onChangeText={person => this.setState({person})}
              placeholder="Enter Person's Name" />
                
                <Button
                title='Go to BillScreen Page'
                //helps in navigation to different screens
                onPress={() => {
                  itemsActions.addPerson({
                    personName: this.state.person,
                    selected: false
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
    }
  });

//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 