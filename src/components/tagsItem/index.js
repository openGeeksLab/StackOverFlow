import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment'

class TagsItem extends Component {

  render() {
    return (
        <View style={{ borderRadius: 5, backgroundColor: '#DC143C', marginLeft: 10, marginRight: 5, marginTop: 15, marginBottom: 15}}>
          <Text style={{ fontSize: 15, color: 'white' , padding: 3, paddingRight: 7, paddingLeft: 7}}>
            {this.props.title}
          </Text>
        </View>
    );
  }
}

export default TagsItem;