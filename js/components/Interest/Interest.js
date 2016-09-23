// @flow
import React, { Component } from 'react'
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import InterestCell from './InterestCell'
import InterestHeader from './InterestHeader'

export default class Interest extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selected: false,
      dataSource: ds.cloneWithRows([
        {style: 'Shoes', brand: 'Jordan', image: require('../../../public/assets/img/dummy/jordanGroup.jpeg')},
        {style: 'Artwork', brand: 'Streetart', image: require('../../../public/assets/img/dummy/kawsGroup.jpg')},
        {style: 'Cars', brand: 'Lamborghini', image: require('../../../public/assets/img/dummy/lamboGroup.jpg')},
        {style: 'Clothing', brand: 'Supreme', image: require('../../../public/assets/img/dummy/supremeGroup.jpeg')},
      ])
    };
  }

  renderRow(rowData){
    return (
      <InterestCell rowData={rowData} />
    )
  }

  renderHeader(){
    return(
      <InterestHeader/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    backgroundColor: 'black'
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
});
