import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useLocation ,useNavigate} from "react-router-dom";
import '../map/map.scss'

const MapContainer = (props: any) => {
  const AnyReactComponent = ({ text }: any) => (
    <div>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="red"
        className="bi bi-geo-alt"
        viewBox="0 0 16 16"
      >
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    </div>
  );
  const [mapData, setMapData] = useState({ lng: 72.5101, lat: 23.0379 });
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setMapData({ lng: location.state.longitude, lat: location.state.latitude });
  }, []);
  const handlBack = () =>{
    navigate("/");
  }
  return (
    <div className="map-wrapper">
        <div className="back-btn">
            <button onClick={()=>handlBack()}>
                Back Home
            </button>
        </div>
      <div className="map-div" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}}
          defaultCenter={mapData}
          defaultZoom={14}
        >
          <AnyReactComponent
            lat={mapData.lat}
            lng={mapData.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapContainer;
