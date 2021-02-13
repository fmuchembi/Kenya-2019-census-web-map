import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

class App extends React.Component {
    state = {
        lat: 1.286389,
        lng: 38.817223,
        zoom: 6,
    }
    render() {
        const style ={
            height:'90vh',
            width:'100%',

        }
        return(
          <div className='html'>
            <h2 className='heading'>KENYA POPULATION CENSUS</h2>
            <div className="row no-gutters">
                <div className="col-sm-6 col-md-8">
                    <MapContainer center={[this.state.lat, this.state.lng]}
                          zoom={this.state.zoom}  scrollWheelZoom={false} style={style}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            
                        <Marker position={[2.505, 35.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
              </div>
          </div>
        );
        

    }

}

export default App;
