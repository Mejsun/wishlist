import './Styles.scss'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, } from 'react-leaflet'
import {useState, useRef, useCallback, useMemo} from 'react'

//to show your location
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {map.locate()},
    locationfound(e) {setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },})
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

function Map ({tasks}){
  const center = {lat: 51.505,lng: -0.09}
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(() => ({dragend() {const marker = markerRef.current
        if (marker != null) {setPosition(marker.getLatLng())}}}), [])
  const toggleDraggable = useCallback(() => {setDraggable((d) => !d)}, [])

    return (
        <div id='map'>
         <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
         <div className='searchbar'>search here</div>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />       
          <LocationMarker/>
      
    {tasks.map((item,i)=>{return(
          <Marker draggable={draggable} eventHandlers={eventHandlers} position={position} ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable} >
        <p className={`markerPopup ${item.isCompleted  ? 'done' : ''}`}>{i+1}. {item.text}</p>
        <p className='dragStatus'>{draggable ? 'Marker draggable' : 'Click to drag'}</p>
          </span>
        </Popup>
      </Marker>
        )})}
     
          </MapContainer>
        </div>
)}

export default Map