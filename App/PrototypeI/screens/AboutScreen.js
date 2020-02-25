import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';

export default class AboutScreen extends React.Component {

    state = {
        image : null,
    };

    // componentDidMount(){

    // }

    static navigationOptions = {
        title: 'About Us\t',
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.centeralign}>
                <Text style={styles.text}>Developed by 2019-2020 Group #26</Text>

        <Text>{'\n'}</Text>

                <Text style={styles.text}>This application was created by 6 Engineering students at McMaster University as part of their final year Software Engineering capstone project</Text>
        
        <Text>{'\n'}</Text>

                <Button
                title='Go to Main Page'
                //helps in navigation to different screens
                onPress={() => this.props.navigation.navigate('Home')}
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