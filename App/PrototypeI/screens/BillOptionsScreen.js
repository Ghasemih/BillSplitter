import React, { Component } from 'react';
//UI Elements
import { TextInput, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BillOptionsScreen extends React.Component {

    state = {
        image : null,
    };

    // componentDidMount(){

    // }

    static navigationOptions = {
        title: 'Bill Options Screen\t',
    };

  render() {
    return (
      <View style={styles.centeralign}>
        <Text style={styles.subheading}>How would you like to split your bill? </Text>
        <Text>{'\n'}</Text>

        <View>
          <Button 
            title=" Take a photo  "
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('AddBill',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />
           <Text>{'\n'}</Text>
          <Button 
            title=" Enter Values Manually "
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('Bill',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />
          <Text>{'\n'}</Text>
          <Button 
            title=" Divide Equally  "
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('SimpleDivide',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  centeralign: {
    flex: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25
  },
  heading: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
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
  text: {
    color: 'black',
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  text2: {
    color: 'black',
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic'
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