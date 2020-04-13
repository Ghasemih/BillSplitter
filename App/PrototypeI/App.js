import React, { Component } from 'react';
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

//UI Elements
import { TextInput, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


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
        <Text style={styles.text2} > Get started on dividing that complicated restaurant bill!</Text>
        <Text style={styles.text} > Choose an option below:</Text>
        <Text>{'\n'}</Text>


        <View style={styles.button}>
          <Button 
            title=" Add a Bill  " 
            //helps in navigation to different screens
            onPress={() => this.props.navigation.navigate('BillOptions',
              {
                total: 10,
                name: 'ibrahim',
              }
            )}
          />
          <Text>{'\n'}</Text>
          <Button 
            title="  View Previous Bills    "
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
            title="  About   "
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
