import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from "react-native-modal";
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'
import { getSearch, getSortOptions, getQuestionsArray } from '../../store/actions';
import moment from 'moment';

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      modalVisible: false,
      order: 'asc',
      sort: 'week',
      fromdate: '2019-06-05',
      todate: '2019-06-05',
    };
  }

  render(){
    let dropOrderData = [
      {
        value: 'asc',
      },
      {
        value: 'desc',
      }
    ];
    let dropSortData = [
      {
        value: 'activity',
      },
      {
        value: 'votes',
      },
      {
        value: 'creation',
      },
      {
        value: 'hot',
      },
      {
        value: 'week',
      },
      {
        value: 'month',
      }
    ];
    return(
      <View style={{width: '100%', backgroundColor: '#6495ED', borderRadius: 0, paddingTop: 55, paddingBottom: 7, flexDirection: 'row'}}>
        <TextInput
          style={{width: '80%', height: 30, borderWidth: 1, borderColor: 'grey', borderRadius: 10, backgroundColor: 'white', marginLeft: 15, color: 'black', paddingLeft: 7}}
          onChangeText={(text) => {
            this.setState({text}, () => {
              console.log('Search place...', this.props.options)
              this.props.options.tag = this.state.text;
              this.props.onGetSearch(this.props.options)
            })

          }
          }
          placeholder='Search by tags'
          value={this.state.text}
      />

      <Modal
        isVisible={this.state.modalVisible}
        animationType="slide"
        onBackdropPress={() => this.setState({ modalVisible: false })}
        onSwipeComplete={() => this.setState({ modalVisible: false })}
        swipeDirection="left"
      >
        <View style={{ marginTop: 75, width: '100%', height: 300, backgroundColor: '#EFEFF4', borderRadius: 5, }}>
          <TouchableOpacity onPress={()=>this.setState({modalVisible: false})}>
            <Text style={{ color: 'grey', fontSize: 24, textAlign: 'right', marginRight: 10, marginTop: 5}}>x</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 135, marginRight: 35, marginLeft: 15}}>
              <Dropdown
                  label='Select order'
                  data={dropOrderData}
                  style={{width: '75%',}}
                  onChangeText={(value)=>this.setState({order: value})}
                />
            </View>
            <View style={{width: 135}}>
              <Dropdown
                  label='Select Sort'
                  data={dropSortData}
                  style={{width: '75%'}}
                  onChangeText={(value)=>this.setState({sort: value})}
                />
            </View>
          </View>

          <View style={{marginTop: 15}}>
            <DatePicker
              style={{width: 200, marginBottom: 10}}
              date={this.state.fromdate}
              mode="date"
              placeholder="Select fromdate"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({fromdate: date})}}
            />

              <DatePicker
                style={{width: 200}}
                date={this.state.todate}
                mode="date"
                placeholder="Select ToDate"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({todate: date})}}
            />
          </View>

          <TouchableOpacity
            onPress={()=>{
              this.props.onGetSortOptions({
                page: '1',
                todate: new Date(this.state.todate).getTime()/1000,
                fromdate: new Date(this.state.fromdate).getTime()/1000,
                order: this.state.order,
                sort: this.state.sort,
              });
              this.props.onGetQuestionsArray({
                page: '1',
                todate: new Date(this.state.todate).getTime()/1000,
                fromdate: new Date(this.state.fromdate).getTime()/1000,
                order: this.state.order,
                sort: this.state.sort,
              });

              this.setState({modalVisible: false});
            }}>
            <View style={{ flexDirection: 'row' ,width: '90%', marginLeft: 15, borderTopWidth: 0, borderColor: 'lightgrey', paddingTop: 20, marginBottom: 20, marginTop: 15}}>
                  <Text style={{width: '30%', textAlign: 'left', color: 'black', fontWeight: '600',  fontSize: 19, paddingTop: 5}}></Text>
                  <View style={{width: '40%', textAlign: 'center', borderRadius: 5, backgroundColor: '#3CB371',  paddingBottom: 5, paddingTop: 5}}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>Confirm<Text style={{fontSize: 15}}></Text></Text>
                  </View>
                  <Text style={{width: '30%', textAlign: 'right', color: 'black', fontWeight: '600',  fontSize: 19, paddingTop: 5}}></Text>
              </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity onPress={()=>this.setState({ modalVisible: !this.state.modalVisible })}>
        <Image style={{width: 30, height: 30, marginLeft: 10}} source={{uri: 'https://cdn4.iconfinder.com/data/icons/ui-admin-side-menu-set-32-vol-1/40/Filter2x-512.png'}} />
      </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    options: state.options.options,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetSearch: (tags) => dispatch(getSearch(tags)),
  onGetSortOptions: (options) => dispatch(getSortOptions(options)),
  onGetQuestionsArray: (options) => dispatch(getQuestionsArray(options))
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);