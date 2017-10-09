import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry , Image} from 'react-native';
import DrawBorder from './src/components/layouts.js';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>RockShip</Text>
          </View>
        </View>
        <View style={styles.headerShowbiz}>
          <Text style={styles.headerTextShowbz}>Showbiz</Text>
        </View>
        <View>
          <DrawBorder />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 35,
    backgroundColor: 'red',


  },
  headerText: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'blue',
    fontWeight: 'bold',

  },
  headerShowbiz: {
    borderLeftWidth: 1,
    borderLeftColor: 'orange',
    marginLeft: 6,
    marginTop: 10,
    paddingLeft: 3,

  },
  headerTextShowbiz: {
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('APPSTREAM', () => App)