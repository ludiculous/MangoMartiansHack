import React from 'react';
import {
  Video,
  View,
  asset
} from 'react-vr';

//Element
class Movie extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1, height: 315,}}>
        <Video style={{height:314}} source={asset(this.props.film)} />
      </View>
    )
  }
}

module.exports = Movie;
