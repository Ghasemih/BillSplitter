import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BillScreen from './screens/BillScreen';
import AddBillScreen from './screens/AddBillScreen';
import AddItemScreen from './screens/AddItemScreen';
import EditItemScreen from './screens/EditItemScreen';
import AddPersonScreen from './screens/AddPersonScreen';
import EditPersonScreen from './screens/EditPersonScreen';
import SummaryScreen from './screens/SummaryScreen';
import AboutScreen from './screens/AboutScreen';
import BillOptionsScreen from './screens/BillOptionsScreen';
import SimpleDivideScreen from './screens/SimpleDivideScreen';
import Step1AddItem from './screens/Step1AddItem';
import Step2AddPerson from './screens/Step2AddPerson';

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
    title: 'Welcome',
  };

  render() {
    return (
      <View style={styles.centeralign}>
        <Text style={styles.heading} > BillSplitter </Text>
        <Text style={styles.text} > Choose an option to get started!</Text>
        
        <View style={styles.button}>
          <Button 
            title="Add a Bill"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('BillOptions',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />

          <Button 
            title="View Previous Bills"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('AddBill',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />

          <Button 
            title="About"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('AboutScreen',
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

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    AddBill: AddBillScreen,
    Bill: BillScreen,
    BillOptions : BillOptionsScreen,
    AddItem: AddItemScreen,
    AddPerson: AddPersonScreen,
    Summary: SummaryScreen,
    EditItem: EditItemScreen,
    EditPerson : EditPersonScreen,
    AboutScreen : AboutScreen,
    SimpleDivide : SimpleDivideScreen,
    Step1AddItem : Step1AddItem,
    Step2AddPerson : Step2AddPerson
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
    marginBottom: 30,
    textAlign: 'center'
  },
  button:{
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 100,
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