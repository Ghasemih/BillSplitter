import React, { Component } from 'react';
import * as itemsActions from '../items/items.actions';
import {View as AnimatableView} from 'react-native-animatable';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {itemsStore} from '../items/items.store';


//UI Elements
import { TextInput, StyleSheet, View, Image,SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



function Item({ item }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.itemName}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
}

function mapStateToItems() {
  return {
    items: itemsStore.getItems(),
  }
}
class Step1AddItem extends React.Component {

    constructor(props){
      super(props)
      this.state = {
          itemName : "",
          price: 0.0,
      };
    }

    state = {
      renderItems : [],
    };

    static propTypes = {
      componentId: PropTypes.string,
      items: PropTypes.array,
      people: PropTypes.array
    };
    
    componentDidMount(){
      itemsActions.fetchItems();
      itemsActions.fetchPerson();
      this.setState({renderItems : this.props.items})
    };

    // FlatListItemSeperator = () => {
    //   return(
    //   <View style={styles.line}></View>
    //   )
    // };

    static navigationOptions = {
        title: "Step 1",
    };

    render() {
        const {navigation} = this.props;
        return (
            
            <View style={styles.centeralign}>
                <Text>{'\n'}</Text>
                <Text style={styles.heading}>Step 1 : </Text>
                <Text style={styles.subheading}>Add your Items!</Text>  
                <Text>{'\n'}</Text>              
              
              <TextInput
              style={styles.inputBox}
              onChangeText={itemName => this.setState({itemName})}
              placeholder="Enter Item Name" 
              ref={input2 => { this.textInput2 = input2 }}
              />
                
              <TextInput
              style={styles.inputBox}
              onChangeText={price => this.setState({price})}
              placeholder="Enter Item Price" 
              keyboardType="numeric"  
              returnKeyType='done'   
              ref={input => { this.textInput = input }}
              />    
                
                <Text>{'\n'}</Text>   

                <Button
                title=
                " 
                Add Item to List
                "
                //helps in navigation to different screens
                onPress={() => {
                  itemsActions.addItem({
                    itemName: this.state.itemName,
                    price: this.state.price,
                    assignedPeople: [],
                    taxValue: 13,
                    tipValue: 10
                  });
                 this.textInput.clear(); this.textInput2.clear();
                 this.props.navigation.navigate('Step1AddItem');
                }
                }
                />
          
          <Text>{'\n'}</Text>

              <Button
                title=
                "
                Finished adding Items!
                "
                //helps in navigation to different screens
                onPress={() => {
                 this.props.navigation.navigate('Step2AddPerson');
                  }
                }
                />   


          <SafeAreaView style={styles.container}>
          <FlatList
            data={this.props.items}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 15}}
            ItemSeparatorComponent={this.FlatListItemSeperator}
            horizontal={true}
          />
          </SafeAreaView>   
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
    }
  });

  export default connect(mapStateToItems)(Step1AddItem);
//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 