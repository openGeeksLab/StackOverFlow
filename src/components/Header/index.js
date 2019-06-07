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
import {
  getSearch,
  getSortOptions,
  getQuestionsArray
} from '../../store/actions';
import styles from './styles';

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
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({text}, () => {
              this.props.options.tag = this.state.text;
              this.props.onGetSearch(this.props.options)
            })}
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
        <View style={styles.closeButton}>
          <TouchableOpacity onPress={()=>this.setState({modalVisible: false})}>
            <Text style={styles.closeButtonText}>x</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: 135, marginRight: 35, marginLeft: 15}}>
              <Dropdown
                  label='Select order'
                  data={dropOrderData}
                  style={styles.dropDown}
                  onChangeText={(value)=>this.setState({order: value})}
                />
            </View>
            <View style={{width: 135}}>
              <Dropdown
                  label='Select Sort'
                  data={dropSortData}
                  style={styles.dropDown}
                  onChangeText={(value)=>this.setState({sort: value})}
                />
            </View>
          </View>

          <View style={styles.dateCont}>
            <DatePicker
              style={styles.datePicker}
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
              }}
              onDateChange={(date) => {this.setState({fromdate: date})}}
            />

              <DatePicker
                style={styles.datePicker}
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
            <View style={styles.bottomCont}>
                  <Text style={styles.bottomLeft}></Text>
                  <View style={styles.bottomCenter}>
                    <Text style={styles.bottomCenterText}>Confirm</Text>
                  </View>
                  <Text style={styles.bottomRight}></Text>
              </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity onPress={()=>this.setState({ modalVisible: !this.state.modalVisible })}>
        <Image style={styles.image} source={{uri: 'https://cdn4.iconfinder.com/data/icons/ui-admin-side-menu-set-32-vol-1/40/Filter2x-512.png'}} />
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
