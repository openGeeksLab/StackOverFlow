import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import TagsList from '../tagsList';

import moment from 'moment'
import styles from './styles';

class QuestionsItem extends Component {

  renderVotes() {
    if(this.props.item.score < 1000){
      return (
        <Text style={styles.score}>{this.props.item.score}<Text style={styles.suff}> votes</Text></Text>
      )
    } else if(this.props.item.score <10000) {
      return(
        <Text style={styles.score}>{this.props.item.score/1000}K<Text style={styles.suff}> votes</Text></Text>
      )
    } else {
      return(
        <Text style={styles.score}>{this.props.item.score/1000000}M<Text style={styles.suff}> votes</Text></Text>
      )
    }
  };

  renderViews() {
    if(this.props.item.view_count < 1000){
      return (
        <Text style={styles.viewCounter}>{this.props.item.view_count}<Text style={styles.suff}> views</Text></Text>
      )
    } else if(this.props.item.view_count <10000) {
      return(
        <Text style={styles.viewCounter}>{this.props.item.view_count/1000}K<Text style={styles.suff}> views</Text></Text>
      )
    } else {
      return(
        <Text style={styles.viewCounter}>{this.props.item.view_count/1000000}M<Text style={styles.suff}> views</Text></Text>
      )
    }
  }

  render() {
    return (
         <View 
          style={styles.mainCont}>
            <TouchableOpacity onPress={() => this.props.goToFull(this.props.item)}>
              <View style={styles.profileCont}>
                <Image style={styles.image} source={{uri: this.props.item.owner.profile_image}} />
                <View style={styles.ownerCont}>
                  <View style={styles.userNameCont}>
                    <Text style={styles.displayName}>{this.props.item.owner.display_name}</Text>
                    <Text style={styles.reputation}>{this.props.item.owner.reputation}</Text>
                  </View>
                  <Text style={styles.date}>on {moment(new Date(this.props.item.creation_date*1000).toString()).format('MMM DD,YYYY')} at {moment(new Date(this.props.item.creation_date*1000).toString()).format('HH:mm')}</Text>
                </View>
              </View>

              <Text style={styles.itemTitle}>{this.props.item.title}</Text>
              <TagsList
                tags={this.props.item.tags}
              />

              <View style={styles.bottomCont}>
                  {this.renderVotes()}
                  <View style={styles.answerCont}>
                    <Text style={styles.answerCount}>{this.props.item.answer_count} <Text style={styles.answer}>answers</Text></Text>
                  </View>
                  {this.renderViews()}
              </View>
            </TouchableOpacity>
          </View>
    );
  }
}

export default QuestionsItem;
