import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarker} from 'react-icons/fa';
import NavbarComp from '../Home/NavbarComp'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const divStyle = {
  color: 'blue',
  icon: FaMapMarker
};

class SimpleMap extends Component {

  
  static defaultProps = {
    center: {
      lat: 47.6062,
      lng: -122.3321
    },
    zoom: 15
  };
  

  render() {
   console.log(process.env.REACT_APP_key)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <NavbarComp/>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_BACKEND_ADDRESS}`}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={47.6062} lng={-122.3321} text="MY MARKER" style={divStyle}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;