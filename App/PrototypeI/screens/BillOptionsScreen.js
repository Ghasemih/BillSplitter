import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';

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
        <Text style={styles.subheading} >Choose your method of input</Text>
        
        <Text>{'\n'}</Text>

        <View style={styles.button}>
          <Button 
            title="Take a photo"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('AddBill',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />

          <Button 
            title="Enter Values Manually"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('Bill',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />

          <Button 
            title="Divide Equally"
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