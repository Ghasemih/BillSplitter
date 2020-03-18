import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';

export default class EditPersonScreen extends React.Component {

    state = {
        image : null,
    };

    // componentDidMount(){

    // }

    static navigationOptions = {
        title: 'EditPersonScreen\t',
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.centeralign}>
                <Text style={styles.heading}>EditPersonScreen</Text>
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

//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 