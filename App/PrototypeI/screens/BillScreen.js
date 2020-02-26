import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'remx';
import {itemsStore} from '../items/items.store';
import * as itemsActions from '../items/items.actions';

class BillScreen extends React.Component {

    state = {
        image : null,
    };

    static propTypes = {
      componentId: PropTypes.string,
      items: PropTypes.array
    };
    
    componentDidMount(){
      itemsActions.fetchItems();
    }

    static navigationOptions = {
        title: 'BillScreen\t',
    };



    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.centeralign}>
                <Text style={styles.heading}>BillScreen</Text>

                <Text>{JSON.stringify(this.props.items)}</Text>
              
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
    items: itemsStore.getItems()
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
    }
  });

export default connect(mapStateToItems)(BillScreen);
//   onPress={() => this.props.navigation.navigate('AddBill',{
//     total: 10,
//     name: 'ibrahim',
//   }
// )}
// 