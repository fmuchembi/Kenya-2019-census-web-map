import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import {features} from './data/counties.json';
import Key from './Key';

const Map = () => {
    const style = {
        height: '90vh',
        width: '100%',
    }
    const countyStyle={
        fillColor: '#FF4500',
        weight: 0.5,
        opacity: 4,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.5

    }
    console.log(features)
    

    return (
        <div className='html'>
            <h2 className='heading'>KENYA POPULATION CENSUS</h2>
            <div className="row no-gutters">
                <div className="col-sm-6 col-md-8">
                    <MapContainer center={[1.286389, 38.817223]}
                        zoom={6} scrollWheelZoom={false} style={style}>
                        <TileLayer
                            attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                        />
                        <GeoJSON data={features} style={countyStyle} />
                        <Marker position={[1.2578, 37.5]}>
                            <Popup>I am a green leaf</Popup>
                        </Marker>
                        <h1>Helo world</h1>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Map;