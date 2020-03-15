import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';

export default class EditBillScreen extends React.Component {

    constructor(props){
      super(props)
      const {navigation} = this.props;
      this.state = {
        itemName : null,
      };
    }
    
    // componentDidMount(){

    // }

    static navigationOptions = {
        title: "EditBillScreen\t",
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.centeralign}>
                <Text style={styles.heading}>EditItemScreen</Text>

                <TextInput
                  style={styles.inputBox}
                  onChangeText={itemName => this.setState({itemName})}
                  placeholder="Edit Item Name" 
                  value={this.state.itemName}
                />


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