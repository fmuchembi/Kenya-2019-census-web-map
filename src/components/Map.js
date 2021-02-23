import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import {features} from '../data/data.json';

const Map = ()=>{

    const feature = features.map(feature=>{
        return(feature);
    });

    let mapRef;
    const COLOR_0 = "#feedde";
    const COLOR_10 = "#fdd0a2";
    const COLOR_200 = "#fdae6b";
    const COLOR_400 = "#fd8d3c";
    const COLOR_900 = "#e6550d";
    const COLOR_3000 = "#a63603";


    function mapPolygonColorToDensity(density) {
        return density > 3000
            ? COLOR_3000
            : density > 900
            ? COLOR_900
            : density > 400
            ? COLOR_400
            : density > 200
            ? COLOR_200
            : density > 10
            ? COLOR_10
            : COLOR_0;
    }
    const style = (features => {
        return ({
            fillColor: mapPolygonColorToDensity(features.properties.Desnity),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.7
        });
    });
    const mapStyle = {
        height: '90vh',
        width: '100%',
    }
      
    console.log(features[46].properties.Desnity)
    return(
         <div className='html'>
            <h2 className='heading'>KENYA POPULATION CENSUS</h2>
            <div className="row no-gutters">
                <div className="col-sm-6 col-md-8">
                <MapContainer center={[1.286389, 38.817223]}
                zoom={6} scrollWheelZoom={true} style={mapStyle}>
                    <TileLayer
                        attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                    />
                   {feature && (
                    <GeoJSON data={feature} 
                    style={style} />
                    )}
                    <Marker position={[1.2578, 37.5]}>
                        <Popup>I am a green leaf</Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
        </div>

    )
}
export default Map;