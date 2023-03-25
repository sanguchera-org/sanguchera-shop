import {
  Data,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../store/user/user.atom';
import './left-side.scss';

const containerStyle = {
  width: '100%',
  height: '300px',
};

/* eslint-disable-next-line */
export interface LeftSideProps {}

export function LeftSide(props: LeftSideProps) {
  const [currentLocation, setCurrentLocation] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const user = useRecoilValue(userState);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC1rkO37Rg4VJBGbkcEnLX8qfXascOuFpo',
    libraries: ['places'],
  });

  const [map, setMap] = useState<any>(null);

  const onLoad = useCallback(function callback(map: any) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const bounds = new window.google.maps.LatLngBounds({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        map.fitBounds(bounds);
        setMap(map);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const onClick = (...args: any[]) => {
    // console.log(...args);
    setSelectedLocation({
      lat: args[0].latLng.lat(),
      lng: args[0].latLng.lng(),
    });
    console.log(
      'onClick args: ',
      args[0].latLng.lat(),
      ' : ',
      args[0].latLng.lng()
    );
  };

  const center: google.maps.LatLngLiteral = currentLocation || selectedLocation;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setSelectedLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      }
    );
    setMap(null);
  }, []);

  return (
    <div className="w-full h-full p-5 flex-row items-center justify-center">
      <div>
        <h1>Seleccinar ubicación</h1>
        {isLoaded ? (
          <GoogleMap
            id="data-example"
            mapContainerStyle={containerStyle}
            // center={
            zoom={12}
            onLoad={onLoad}
            onClick={onClick}
          >
            {selectedLocation && (
              <Marker
                position={{
                  lat: selectedLocation.lat,
                  lng: selectedLocation.lng,
                }}
              />
            )}
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Teléfono
          </label>
          <input
            type="number"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="..."
            defaultValue={user?.phoneNumber}
          />
        </div>
      </div>
      <div className="mt-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Detalles extras
          </label>
          <textarea
            className=" min-h-[120px] max-h-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Referecia: Frente a la Universidad U"
          />
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
