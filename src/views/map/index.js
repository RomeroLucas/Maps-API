import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import  { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

import ContainerEntrega from '../../components/container-entrega'

import './style.css'

//componente do mapa
function Map() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{lat: -22.906847, lng: -43}}>
            <Marker position={{lat: -22.906847, lng: -43}} />
            <Marker position={{lat: -22.906847, lng: -42}} />
        </GoogleMap>
    )
}
//passando o mapa para um componente com mais opções
const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function MapView(props) {
    const entrega = useSelector(state => state.dadosDaEntrega)
    let history = useHistory()
    

    return (
        <main className='entregas'>
            <ul>
                <h2>Entrega selecionada</h2>
                { !entrega ? history.push('/entregas') : <ContainerEntrega dados={entrega} className='list-group-item' /> }
            </ul>

            {/* A DIV QUE CONTEM O MAPA PRECISA DE UM WIDTH E UM HEIGHT DEFINIDO */}
            <div style={{margin: '15px auto', width: '80%', height: '400px'}}>
                <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCfjDKdwXwfRIEHB7A8rYxv24WAcUbJsbc`}
                    loadingElement={<div style={{height: '100%'}} />}
                    containerElement={<div style={{height: '100%'}} />}
                    mapElement={<div style={{height: '100%'}} />}
                />
            </div>
        </main>
    )
}