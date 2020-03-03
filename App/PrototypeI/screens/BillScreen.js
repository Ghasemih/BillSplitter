import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {itemsStore} from '../items/items.store';
import * as itemsActions from '../items/items.actions';
import { ListItem } from 'react-native-ui-lib';
import {View as AnimatableView} from 'react-native-animatable';

function RenderItem({item}){
  console.log(item);
  return(
  <View>
    <Text>
      {item}
    </Text>
  </View>
  );
    
    // <ListItem
    //   activeOpactiy={0.1}
    //   onPress={() => console.log(item)}
    // >
    //   <ListItem.Part>
    //   <Text>{item.itemName}</Text>
    //   <Text>{item.price}</Text>
    //   </ListItem.Part>  
    // </ListItem>
}


class BillScreen extends React.Component {

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
    }

    static navigationOptions = {
        title: 'BillScreen\t',
    };


      

    FlatListItemSeperator = () => {
      <View style={styles.line}></View>
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.centeralign}>
                <Text style={styles.heading}>BillScreen</Text>

                <Text>{JSON.stringify(this.props.items)}</Text>
                <FlatList
                  data = {this.props.items}
                  ItemSeparatorComponent = {this.FlatListItemSeperator}
                  renderItem={({item}) => <RenderItem item={item.itemName} />}
                  keyExtractor={item => item.itemName}
                  // extraData={this.state}
                />
                

                <Text>{JSON.stringify(this.props.people)}</Text>
                <Button
                title='Go to AddItemScreen Page'
                //helps in navigation to different screens
                onPress={() => this.props.navigation.navigate('AddItem')}
                />

                <Button
                title='Go to EditItemScreen Page'
                //helps in navigation to different screens
                onPress={() => this.props.navigation.navigate('EditItem')}
                />

                <Button
                title='Go to AddPersonScreen Page'
                //helps in navigation to different screens
                onPress={() => this.props.navigation.navigate('AddPerson')}
                />

                <Button
                title='Go to SummaryScreen Page'
                //helps in navigation to different screens
                onPress={() => this.props.navigation.navigate('Summary')}
                />

                
            </View>
        )
    };
}

function mapStateToItems() {
  return {
    items: itemsStore.getItems(),
    people: itemsStore.getPeople(),
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
    },
    line: {
      height: 0.5,
      width: "100%",
      backgroundColor:"rgba(255,255,255,0.5)"
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
    }
  });

export default connect(mapStateToItems)(BillScreen);
//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 