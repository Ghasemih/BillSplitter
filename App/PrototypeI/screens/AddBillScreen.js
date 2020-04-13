import React, { Component } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

//UI Elements
import { TextInput, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


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
  
    //Need permission to access camera roll for ios & android
    getPermissionAsync = async () => {
      if (Constants.platform.ios || Constants.platform.android) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      //const {status2} = await Permissions.askAsync(Permissions.CAMERA);

      if (status !== 'granted'){
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

          <Text>{'\n'}</Text> 

          <Button
            title="Use your Camera"
            //use camera application
            onPress={this._takeImage}
          />

          <Text>{'\n'}</Text> 

          <View style={styles.ImageContainer}>    
            {image && <Image source={{ uri: image }} style={{ width: 250, height: 250}} />}
          </View>

          <Text>{'\n'}</Text> 

          <Button
            title="Go to Home page"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('Home')}
          />

          <Text>{'\n'}</Text> 

          <Button
            title="Go to Bill Options page"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('BillOptions')}
          />
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
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerPeople: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center'
    },
    line: {
      height: 0.5,
      width: "100%",
      backgroundColor:"#000"
    },
    price: {
      color: 'blue',
      fontSize: 20,
      textAlign: 'center'
    },
    item: {
      backgroundColor: '#DCEDC8',
      padding: 15,
      marginVertical: 20,
      marginHorizontal: 10
    },
    ImageContainer: {
      borderRadius: 1,
      width: 150,
      height: 150,
      borderColor: '#9B9B9B',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue'
    }


  });