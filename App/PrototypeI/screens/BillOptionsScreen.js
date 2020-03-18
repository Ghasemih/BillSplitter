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

        <View>
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
           <Text>{'\n'}</Text>
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
          <Text>{'\n'}</Text>
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
    subheading: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 22,
      textAlign: 'center'
    },
    but: {
      margin: 20 
    }
  });

//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 