import React, { Component } from 'react'
import FullScreen from './fullScreen';

class FullViewScreen extends Component{

  goBack = () => {this.props.navigation.navigate('Home')}

  render(){
    const item = this.props.navigation.getParam('data', []);

    return(
      <FullScreen
        item={item}
        goBack={this.goBack}
      />
    )
  }
}

export default FullViewScreen
