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
        <Text style={styles.heading} > BillSplitter </Text>
        <Text style={styles.text} > Provide the information or add a photo</Text>
        
        <View style={styles.button}>
          <Button 
            title="Add photo"
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('AddBill',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />
        </View>

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




const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    AddBill: AddBillScreen,
    Bill: BillScreen,
    AddItem: AddItemScreen,
    AddPerson: AddPersonScreen,
    Summary: SummaryScreen,
    EditItem: EditItemScreen,
    EditPerson : EditPersonScreen
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