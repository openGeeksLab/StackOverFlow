import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import TagsList from '../tagsList';

import moment from 'moment'

class QuestionsItem extends Component {

  renderVotes() {
    if(this.props.item.score < 1000){
      return (
        <Text style={{width: '30%', textAlign: 'left', color: 'black', fontWeight: '600',  fontSize: 19, paddingTop: 5}}>{this.props.item.score}<Text style={{ fontWeight: '500',fontSize: 14, color: 'grey', marginTop:2 }}> votes</Text></Text>
      )
    } else if(this.props.item.score <10000) {
      return(
        <Text style={{width: '30%', textAlign: 'left', color: 'black', fontWeight: '600',  fontSize: 19, paddingTop: 5}}>{this.props.item.score/1000}K<Text style={{ fontWeight: '500',fontSize: 14, color: 'grey', marginTop:2 }}> votes</Text></Text>
      )
    } else {
      return(
        <Text style={{width: '30%', textAlign: 'left', color: 'black', fontWeight: '600',  fontSize: 19, paddingTop: 5}}>{this.props.item.score/1000000}M<Text style={{ fontWeight: '500',fontSize: 14, color: 'grey', marginTop:2 }}> votes</Text></Text>
      )
    }
  };

  renderViews() {
    console.log('Views>>>', this.props.item.view_count)
    if(this.props.item.view_count < 1000){
      return (
        <Text style={{width: '30%', textAlign: 'right', color: 'black', fontWeight: '600',  fontSize: 19, paddingTop: 5}}>{this.props.item.view_count}<Text style={{ fontWeight: '500',fontSize: 14, color: 'grey', marginTop:2 }}> views</Text></Text>
      )
    } else if(this.props.item.view_count <10000) {
      return(
        <Text style={{width: '30%', textAlign: 'right', color: 'black', fontWeight: '600',  fontSize: 19, paddingTop: 5}}>{this.props.item.view_count/1000}K<Text style={{ fontWeight: '500',fontSize: 14, color: 'grey', marginTop:2 }}> views</Text></Text>
      )
    } else {
      return(
        <Text style={{width: '30%', textAlign: 'right', color: 'black', fontWeight: '600',  fontSize: 19, paddingTop: 5}}>{this.props.item.view_count/1000000}M<Text style={{ fontWeight: '500',fontSize: 14, color: 'grey', marginTop:2 }}> views</Text></Text>
      )
    }
  }

  render() {
    return (
         <View 
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 5,
          }}>
            <TouchableOpacity onPress={() => this.props.goToFull(this.props.item)}>
              <View style={{flexDirection: 'row', margin: 10,}}>
                <Image style={{width:35, height: 35, borderRadius: 20, borderWidth: 1, borderColor: 'grey',marginTop: 3}} source={{uri: this.props.item.owner.profile_image}} />
                <View style={{ flexDirection: 'column' , marginLeft: 5}}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '600', marginRight: 5}}>{this.props.item.owner.display_name}</Text>
                    <Text style={{ fontSize: 14, color: 'grey' , marginTop: 4}}>{this.props.item.owner.reputation}</Text>
                  </View>
                  <Text style={{ fontSize: 14, color: 'grey', marginTop: 3 }}>on {moment(new Date(this.props.item.creation_date*1000).toString()).format('MMM DD,YYYY')} at {moment(new Date(this.props.item.creation_date*1000).toString()).format('HH:mm')}</Text>
                </View>
              </View>

              <Text style={{ fontSize: 18, color: '#1E90FF', fontWeight: '800', marginLeft: 10, marginRight: 7}}>{this.props.item.title}</Text>
              <TagsList
                tags={this.props.item.tags}
              />

              <View style={{ flexDirection: 'row' ,width: '90%', marginLeft: 15, borderTopWidth: 1, borderColor: 'lightgrey', paddingTop: 20, marginBottom: 20}}>
                  {this.renderVotes()}
                  <View style={{width: '40%', textAlign: 'center', borderRadius: 5, backgroundColor: '#3CB371',  paddingBottom: 5, paddingTop: 5}}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>{this.props.item.answer_count} <Text style={{fontSize: 15}}>answers</Text></Text>
                  </View>
                  {this.renderViews()}
              </View>
            </TouchableOpacity>
          </View>
    );
  }
}

export default QuestionsItem;