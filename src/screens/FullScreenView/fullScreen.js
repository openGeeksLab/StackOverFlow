import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  // WebView
} from 'react-native';
import { WebView } from 'react-native-webview';
import moment from 'moment'
import TagList from '../../components/tagsList';


class FullScreen extends Component{

  componentDidMount() {
    console.log('Response>', this.props.item)
  }

  renderAnswer() {
    if(this.props.item.is_answered === true){
      return(
        <Text style={{width: '40%', textAlign: 'center', marginTop: 10, fontSize: 18, color: 'white'}}>Answered</Text>
      )
    } else {
      return(
        <Text style={{width: '40%', textAlign: 'center',marginTop: 10,fontSize: 18, color:'white'}}>Unanswered</Text>
      )
    }
  }

  render(){
    return(
      <View style={{ backgroundColor: '#6495ED', flex: 1}}>
        <View style={{flexDirection: 'row', width: '90%', marginBottom: 5, marginLeft: 5, marginTop: 15}}>
          <TouchableOpacity style={{width: '35%'}} onPress={()=>this.props.goBack()}>
            <Text style={{marginLeft: 15, marginTop: 10, fontSize: 18, color: 'white'}}>Back</Text>
          </TouchableOpacity>
          {this.renderAnswer()}
        </View>
        <View style={{margin: 25, flex: 1}}>
        <View style={{backgroundColor: '#EFEFF4', borderRadius: 5, flex: 1}}>
          <View style={{flexDirection: 'row', margin: 10,}}>
            <Image style={{width:35, height: 35, borderRadius: 20, borderWidth: 1, borderColor: 'grey',marginTop: 3}} source={{uri: this.props.item.owner.profile_image}} />
            <View style={{ flexDirection: 'column' , marginLeft: 5}}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600', marginRight: 5}}>{this.props.item.owner.display_name}</Text>
                <Text style={{ fontSize: 14, color: 'grey' , marginTop: 4}}>{this.props.item.owner.reputation}</Text>
              </View>
              <Text style={{ fontSize: 14, color: 'grey', marginTop: 3 }}>on {moment(new Date(this.props.item.creation_date*1000).toString()).format('MMM DD,YYYY')} at {moment(new Date(this.props.item.creation_date*1000).toString()).format('HH:mm')}</Text>
            </View>
            <View style={{width: '15%', borderRadius: 7, borderColor: 'green', borderWidth: 1, marginLeft: '20%', height: 30}}>
              <Text style={{textAlign: 'center', color: 'green', paddingTop: 5}}>{this.props.item.answer_count}</Text>
            </View>
          </View>

          <Text style={{ fontSize: 18, color: 'black', fontWeight: '600', marginLeft: 10, marginRight: 7}}>{this.props.item.title}</Text>
          <WebView style={{marginTop: 20, flex: 1, borderWidth: 1, borderColor: 'lightgrey'}} source={{ uri: this.props.item.link }} />

          <TagList
            tags={this.props.item.tags}
          />
          <View style={{flexDirection: 'row', marginLeft: 10, width: '90%', marginRight: 15, borderTopWidth: 1, borderColor: 'lightgrey',}}>
          <Image style={{width: 25, height: 25, marginTop: 7}}  source={{uri: 'https://cdn.iconscout.com/icon/free/png-512/star-bookmark-favorite-shape-rank-like-32386.png'}} />
          <Text style={{fontSize: 18, color: 'grey', marginLeft: 5, marginTop: 9}}>{this.props.item.score}</Text>
          </View>
        </View>
        </View>
      </View>
    )
  }
}

export default FullScreen
