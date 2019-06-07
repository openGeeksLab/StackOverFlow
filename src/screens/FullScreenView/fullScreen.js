import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { WebView } from 'react-native-webview';
import moment from 'moment'
import TagList from '../../components/tagsList';
import styles from './styles';

class FullScreen extends Component{
  
  renderAnswer() {
    if(this.props.item.is_answered === true){
      return(
        <Text style={styles.status}>Answered</Text>
      )
    } else {
      return(
        <Text style={styles.status}>Unanswered</Text>
      )
    }
  }

  render(){
    return(
      <View style={styles.mainCont}>
        <View style={styles.headerCont}>
          <TouchableOpacity style={styles.back} onPress={()=>this.props.goBack()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          {this.renderAnswer()}
        </View>
        <View style={styles.profileCont}>
        <View style={styles.subCont}>
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: this.props.item.owner.profile_image}} />
            <View style={styles.userInfoCont}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.displayName}>{this.props.item.owner.display_name}</Text>
                <Text style={styles.reputation}>{this.props.item.owner.reputation}</Text>
              </View>
              <Text style={styles.date}>on {moment(new Date(this.props.item.creation_date*1000).toString()).format('MMM DD,YYYY')} at {moment(new Date(this.props.item.creation_date*1000).toString()).format('HH:mm')}</Text>
            </View>
            <View style={styles.answersCont}>
              <Text style={styles.answersCount}>{this.props.item.answer_count}</Text>
            </View>
          </View>

          <Text style={styles.title}>{this.props.item.title}</Text>
          <WebView style={styles.webView} source={{ uri: this.props.item.link }} />

          <TagList
            tags={this.props.item.tags}
          />
          <View style={styles.rateCont}>
            <Image style={styles.star}  source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/star-bookmark-favorite-shape-rank-like-32386.png'}} />
          <Text style={styles.bottomScore}>{this.props.item.score}</Text>
          </View>
        </View>
        </View>
      </View>
    )
  }
}

export default FullScreen
