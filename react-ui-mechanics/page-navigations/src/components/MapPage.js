import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        center: {
            lat: 39.900067,
            lng: 32.689277
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAf64LWbo9UiVI0tTTE4cWWLgCTFVHBQUx' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }

}

export default MapPage;



