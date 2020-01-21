import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import PostList from './posts/screens/PostList';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      people: 1,
      name: "potato",
    };
  };

  static navigationOptions = {
    title: 'Welcome\t',
  };

  render() {
    return (
      <View style={styles.centeralign}>
        <Button
          title="Go to new page \"
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('Profile',
            {
              total: 10,
              name: 'ibrahim',
            }
          )}
        />
         <Button
          title="Go to PostList\"
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('Post')}
        />
        <Text style={styles.heading} > BillSplitter Prototype</Text>
        <Text style={styles.text} > This application will help you divide your bill invidiually amongst your people</Text>

        <TextInput
          style={styles.inputBox}
          // onChangeText={text => onChangeTextTotal(text)}
          onChangeText={total => this.setState({ total })}
          // value={this.state.total} 
          placeholder='Enter Total + Tip'
          keyboardType='number-pad' />

        <TextInput
          style={styles.inputBox}
          // onChangeText={text => onChangeTextPeople(text)}
          onChangeText={people => this.setState({ people })}
          // value={this.state.people} 
          placeholder='Number of People'
          keyboardType='number-pad' />

        <Text style={styles.heading} >{this.state.total / this.state.people} </Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {

  state = {
    image: null,
  };

  static navigationOptions = {
    title: 'ProfileScreen\t',
  };

  //Asks for permissions
  componentDidMount() {
    this.getPermissionAsync();
  }

  //Need permission to access camera roll for ios
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
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

  
  render() {
    // Needed for accessing parameters from previous screen
    const {navigation} = this.props;
    let {image} = this.state;
    return (
      <View style={styles.centeralign}>

        <Button
          title='Go to Welcome page'
          //helps in navigation to different screens
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Text style={styles.heading} > BillSplitter PAGE 2 BABY</Text>
        {/* <Text style={styles.text} > This application will help you divide your bill invidiually amongst your people</Text> */}
        <Text style={styles.heading}>{JSON.stringify(navigation.getParam('name','default value'))}</Text>
        <Button
          title="Pick_Image\"
          //helps in navigation to different screens
          onPress={this._pickImage}
        />
        <View style={styles.ImageContainer}>    
{image &&
  <Image source={{ uri: image }} style={{ width: 250, height: 250}} />}

        </View>


      </View>
    );
  }
}




const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Posts: PostList,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);
// export default App;

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// export default class App extends React.Component {

//   // const [total, onChangeTextTotal] = React.useState('');
//   // const [people, onChangeTextPeople] = React.useState('');

//   constructor(props){
//     super(props)
//     this.state = {
//       total: 0,
//       people: 1,
//     };
//   };

//   render(){

//     return (
//       <View style={styles.centeralign}>
//         <Text style ={styles.heading} > BillSplitter Prototype</Text>
//         <Text style ={styles.text} > This application will help you divide your bill invidiually amongst your people</Text>

//           <TextInput
//             style={styles.inputBox}
//             // onChangeText={text => onChangeTextTotal(text)}
//             onChangeText={total => this.setState({total})}
//             // value={this.state.total} 
//             placeholder='Enter Total + Tip'
//             keyboardType='number-pad'/>

//           <TextInput
//             style={styles.inputBox}
//             // onChangeText={text => onChangeTextPeople(text)}
//             onChangeText={people => this.setState({people})}
//             // value={this.state.people} 
//             placeholder='Number of People'
//             keyboardType='number-pad'/> 

//           <Text style ={styles.heading} >{this.state.total/this.state.people} </Text>
//       </View>
//     );
//   }
// }

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




// /**
//  * @param {string} imgPath - The path of the image.
//  * @param {string} lang - The language you want to process.
//  * @param {object} tessOptions - Tesseract options.
//  */
//  const lang = LANG_ENGLISH
//  
//  const tessOptions = {
//   whitelist: null, 
//   blacklist: '1234567890\'!"#$%&/()={}[]+*-_:;<>'
// };
//  const imgPath = require("../../assets/list.png");
// RNTesseractOcr.recognize(imgPath, lang, tessOptions)
//   .then((result) => {
//     this.setState({ ocrResult: result });
//     console.log("OCR Result: ", result);
//   })
//   .catch((err) => {
//     console.log("OCR Error: ", err);
//   })
//   .done();