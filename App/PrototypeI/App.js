import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {TextInput} from 'react-native';

export default function App() {

  const [value, onChangeText] = React.useState(' Enter Bill Total Inlcuding Tax+Tip ');
 
  return (
    <View style={styles.centeralign}>
      <Text style ={styles.heading} > BillSplitter Prototype</Text>
      <Text style ={styles.text} > This application will help you divide your bill invidiually amongst your people</Text>
      <TextInput
  style={{ height: 30, borderColor: 'gray', borderWidth: 3 }}
  onChangeText={text => onChangeText(text)}
  value={value} />
    </View>
  );
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
  },
  text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center'
  }
});
