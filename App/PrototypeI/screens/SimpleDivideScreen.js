import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';

export default class SimpleDivideScreen extends React.Component {

    state = {
        image : null,
    };

    // componentDidMount(){

    // }

    static navigationOptions = {
        title: 'Simple Division Screen',
    };

render() {
    return (
      <View style={styles.centeralign}>
        <TextInput
          style={styles.inputBox}
          // onChangeText={text => onChangeTextTotal(text)}
          onChangeText={total => this.setState({ total })}
          // value={this.state.total} 
          placeholder="Enter Total + Tip"
          keyboardType='number-pad' 
          returnKeyType='done' />

        <Text>{'\n'}</Text>
        
        <TextInput
          style={styles.inputBox}
          // onChangeText={text => onChangeTextPeople(text)}
          onChangeText={people => this.setState({ people })}
          // value={this.state.people} 
          placeholder="Number of People"
          keyboardType='number-pad' 
          returnKeyType='done' />

        <Text>{'\n'}</Text>

        <Text style={styles.heading} >{this.state.total / this.state.people} </Text>
      </View>
    );
  }
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