/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

import  Wine from './Wine.json';

var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});

export default class App extends Component {

  onPressClick(event){
      console.log(event);
  }

  state = {
    dataSource : ds.cloneWithRows(Wine),
  }

  render() {
    return (
        <ListView style = {{backgroundColor:'white', marginTop:20}}
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)}
      />
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow){
    console.log(rowData, sectionID, rowID);
    return(
        <TouchableOpacity onPress = {()=>this.onPressClick(rowData)}>
          <View style = {styles.cellStyle}>
            <Image style = {styles.leftImageStyle}
                 source = {{uri:rowData.image}}
            />
            <View style = {styles.textBgViewStyle}>
              <Text style = {styles.descriptionViewStyle}

              >
               {rowData.name}
              </Text>
              <Text style = {styles.priceStyle}>
               ¥{rowData.money}
             </Text>
           </View>
         </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cellStyle:{
    backgroundColor:'white',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#EEEEEE'
  },

  leftImageStyle:{
    width : 80,
    height : 80,
    marginLeft:10,
  },

  textBgViewStyle:{
    //marginRight:10,
    marginLeft:10,
    marginRight:10,
  },

  descriptionViewStyle:{
    marginTop:5,
    width:180
  },

  priceStyle:{
    position:'absolute',
    bottom:5,
    color:'red'
  }


})
