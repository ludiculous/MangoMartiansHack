import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound,
  Model,
  AmbientLight,
  VideoPano,
  Image,
  Button
} from 'react-vr';
import MainMenu from './Components/Scenes/MainMenu.js';
import MovieTheater from './Components/Scenes/MovieTheater.js';
import SceneSelect from './Components/Scenes/SceneSelect.js';
import CylindricalPanel from 'CylindricalPanel';

export default class OutdoorMovieTheater extends Component {
  constructor(){
    super();
    this.state={
      mainMenu: true,
      sceneSelect: false,
      rotation: 130,
      zoom: -90,

    };
    this.lastUpdate = Date.now();
    this.spaceSkymap = [
      '../static_assets/space_right.png',
      '../static_assets/space_left.png',
      '../static_assets/space_up.png',
      '../static_assets/space_down.png',
      '../static_assets/space_back.png',
      '../static_assets/space_front.png'
    ];

    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({
		rotation: this.state.rotation + delta / 150
	  });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  updateScene(scene) {
    switch(scene) {
      case 2:
        this.setState({ mainMenu: false, sceneSelect: true});
        break;
      case 3:
        this.setState({ mainMenu: false, sceneSelect: false});
        break;

    }
  }

  render() {
    const mainMenu = this.state.mainMenu;
    const sceneSelect = this.state.sceneSelect;
    return (
      <View>

        <Pano source={{ uri: this.spaceSkymap }} />
          <CylindricalPanel layer={{width: 2160, density: 2160, height: 720,  radius: 50}}
          style={{position: 'absolute',
               }}
           >

          <View
            style={{
              opacity: 1,
              width: 2160,
              height: 720,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection:'row'
            }}
          >

                  <MovieTheater
                  style={{
                          transform: [
                            {translate: [0, 0, -100]},
                          ],
                        }}
                   film = {'abstract.mp4'}
                  />

                  <MovieTheater
                  style={{
                          transform: [
                            {translate: [0, 0, -100]},
                          ],
                        }}
                   film = {'abstract.mp4'}
                  />
                  <MovieTheater
                  style={{
                          transform: [
                            {translate: [0, 0, -100]},
                          ],
                        }}
                  film = {'bloom.mp4'}
                  />
                  <MovieTheater
                  style={{
                          transform: [
                            {translate: [0, 0, -100]},
                          ],
                        }}
                  film = {'datadl.mp4'}
                  />
                  <MovieTheater
                  style={{
                          transform: [
                            {translate: [0, 0, -100]},
                          ],
                        }}
                   film = {'abstract.mp4'}
                  />
                  <MovieTheater
                  style={{
                          transform: [
                            {translate: [0, 0, -100]},
                          ],
                        }}
                  film = {'bloom.mp4'}
                  />

            </View>
        </CylindricalPanel>
        <AmbientLight intensity={ 2.6 }  />
                  <Model
                    style={{
                          transform: [
                            {translate: [0, -.02, 0]},
                            {scale: 0.00003 },
                            {rotateY: this.state.rotation},
                            {rotateX: 20},
                            {rotateZ: -10}
                          ],
                        }}
                        source={{obj:asset('earth/earth.obj'), mtl:asset('earth/earth.mtl')}}
                    lit={true}
                  />


      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);
