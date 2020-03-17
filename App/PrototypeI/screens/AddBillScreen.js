import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class AddBillScreen extends React.Component {

    state = {
      image: null,
    };
  
    static navigationOptions = {
      title: "Add a new Bill",
    };
  
    //Asks for permissions
    componentDidMount() {
      this.getPermissionAsync();
    }
  
    //Need permission to access camera roll for ios
    getPermissionAsync = async () => {
      if (Constants.platform.ios || Constants.platform.android) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const {status2} = await Permissions.askAsync(Permissions.CAMERA);

      if (status !== 'granted' || status2 !== 'granted'){
          alert('Sorry, need camera roll permissions');
          console.log('Permission to camera roll not granted');
        }
      }
    }
  
    //Function that lets user pick an image
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
      });
  
      console.log(result);
  
      if (!result.cancelled){
        this.setState({image: result.uri});
      }
    };
  

    _takeImage = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
      });
  
      console.log(result);
  
      if (!result.cancelled){
        this.setState({image: result.uri});
      }
    }
    
    render() {
      // Needed for accessing parameters from previous screen
      const {navigation} = this.props;
      let {image} = this.state;
      return (
        <View style={styles.centeralign}>
  
        <Button
          title="Pick an Image"
          //helps in navigation to different screens
          onPress={this._pickImage}
        />
        <Button
          title="Use your Camera"
          //use camera application
          onPress={this._takeImage}
        />

          <View style={styles.ImageContainer}>    
  {image &&
       <Image source={{ uri: image }} style={{ width: 250, height: 250}} />}
  

          <Text>{'\n\n\n\n\n\n\n'}</Text>

          <Button
            title="Go to Home page"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go to Bill Options page"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('BillOptions')}
          />

          </View>
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
//     name: '',
//   }
// )}
//   