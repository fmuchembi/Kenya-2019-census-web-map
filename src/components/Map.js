import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import {features} from './data/data.json';

const Map = () => {
    const style = {
        height: '90vh',
        width: '100%',
    }

    return (
        <div className='html'>
            <h2 className='heading'>KENYA POPULATION CENSUS</h2>
            <div className="row no-gutters">
                <div className="col-sm-6 col-md-8">
                    <MapContainer center={[1.286389, 38.817223]}
                        zoom={7} scrollWheelZoom={false} style={style}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Map;