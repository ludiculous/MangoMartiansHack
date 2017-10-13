import React from 'react';
import {
  Video,
  View
} from 'react-vr';
import Movie from './Elements/Movie.js';

//Layout
class MovieProjector extends React.Component {
  render() {
    return (
      <View style={{    
        width: 360,
        height: 270,
        backgroundColor: '#333333'
      }}>
        <Movie film={this.props.film}/>
      </View>
    )
  }
}


module.exports = MovieProjector;
