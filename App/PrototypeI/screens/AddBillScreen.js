import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';
import { connect } from 'remx';
import { itemsStore } from '../items/items.store';
import * as itemsActions from '../items/items.actions';

function mapStateToItems() {
  // console.log(itemsStore.getPeople());
  return {
    items: itemsStore.getItems(),
    people: itemsStore.getPeople(),
  }

}

class AddBillScreen extends React.Component {

  state = {
    image: null,
    renderItems: [],
  };

  static propTypes = {
    componentId: PropTypes.string,
    items: PropTypes.array,
    people: PropTypes.array
  };

  static navigationOptions = {
    title: "Add a new Bill",
  };

  //Asks for permissions
  componentDidMount() {
    itemsActions.fetchItems();
    // itemsActions.fetchPerson();
    this.getPermissionAsync();
  }

  //Need permission to access camera roll for ios & android
  getPermissionAsync = async () => {
    if (Constants.platform.ios || Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      //const {status2} = await Permissions.askAsync(Permissions.CAMERA);

      if (status !== 'granted') {
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
      aspect: [4, 3],
    });

    console.log(result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  render() {
    // Needed for accessing parameters from previous screen
    const { navigation } = this.props;
    let { image } = this.state;
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
          {image && <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />}
        </View>

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

        <Button
          title=" Analyze Image "
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('Bill')}
        />


      </View>

    );
  }
}

const styles = StyleSheet.create({
  centeralign: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ImageContainer: {
    borderRadius: 1,
    width: 250,
    height: 250,
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
});
export default connect(mapStateToItems)(AddBillScreen);


//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: '',
//   }
// )}
//   