import React, { Component } from 'react';

//UI Elements
import { TextInput, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AboutScreen extends React.Component {

    state = {
        image : null,
    };

    static navigationOptions = {
        title: 'About Us\t',
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.centeralign}>
                <Text style={styles.text}>Developed by 2019-2020 Group #26</Text>

                <Text>{'\n'}</Text>
                  <Text style={styles.text2}>This application was created by 6 Engineering students at McMaster University as part of their final year Software Engineering capstone project</Text>
                <Text>{'\n'}</Text>

                <Button
                title='  Go to Main Page    '
                
                //helps in navigation to different screens
                onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    };

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
