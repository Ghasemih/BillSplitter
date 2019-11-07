import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {TextInput} from 'react-native';

export default class App extends React.Component {

  // const [total, onChangeTextTotal] = React.useState('');
  // const [people, onChangeTextPeople] = React.useState('');
 
  constructor(props){
    super(props)
    this.state = {
      total: 0,
      people: 1,
    };
  };

  render(){

    return (
      <View style={styles.centeralign}>
        <Text style ={styles.heading} > BillSplitter Prototype</Text>
        <Text style ={styles.text} > This application will help you divide your bill invidiually amongst your people</Text>
        
          <TextInput
            style={styles.inputBox}
            // onChangeText={text => onChangeTextTotal(text)}
            onChangeText={total => this.setState({total})}
            // value={this.state.total} 
            placeholder='Enter Total + Tip'
            keyboardType='number-pad'/>
          
          <TextInput
            style={styles.inputBox}
            // onChangeText={text => onChangeTextPeople(text)}
            onChangeText={people => this.setState({people})}
            // value={this.state.people} 
            placeholder='Number of People'
            keyboardType='number-pad'/> 

          <Text style ={styles.heading} >{this.state.total/this.state.people} </Text>
      </View>
    );
  }
}

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

    