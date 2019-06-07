import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class TagsItem extends Component {

  render() {
    return (
        <View style={styles.titleCont}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
    );
  }
}

export default TagsItem;
