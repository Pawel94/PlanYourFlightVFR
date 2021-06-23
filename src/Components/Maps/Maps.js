import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import React, { useState, useEffect } from "react";
//import DataTable from "../Table/Table";
import { calcCoordinatesToDistance } from "../../Calulations/CalculateDist";
import Sidebar from "../Sidebar/Sidebar";
import { Bearing } from "../../Calulations/CalculateBearing";
import { calculateTime } from "../../Calulations/CalculateTime";

import { crossWind } from "../../Calulations/CalculateCrossWind";
import DataTable2 from "../Table/Table2";
import FlightData from "../FlightData/FlightData";
import { MemoryRouter } from "react-router";
import PDFCreator from "../PDFcreator/PDFCreator";
const Maps = () => {
  const [value, setValue] = useState(null);

  const [marker, Setmarker] = useState([]);
  const [poitsToDraw, SepoitsToDraw] = useState([]);
  const [distanceAll, setDistanceALL] = useState([]);

  const [inputValue, setInputValue] = useState({
    velocity: 100,
    velocityWind: 2,
    windDirection: 140,
  });

  const mapStyles = {
    height: "80vh",
  };

  const defaultCenter = {
    lat: 52.0693,
    lng: 19.0,
  };
  const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];

  const deletePoints = () => {
    Setmarker([]);
    setDistanceALL();
    SepoitsToDraw([]);
  };
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("https://danepubliczne.imgw.pl/api/data/synop").then((response) =>
      // response.json()
      console.log(response.json())
    );

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const AddNewMarker = (e) => {
    let lastMarkerlng, lastMarkerTime, lastMarkerlat;
    let bearing = null;
    let distance = 0;
    let lastMarkerDist = null;
    let distanceAll;
    let time = null;
    let tas = null;
    if (marker.length > 0) {
      lastMarkerlat = marker[marker.length - 1].location.lat;
      lastMarkerlng = marker[marker.length - 1].location.lng;

      bearing = Bearing(
        lastMarkerlat,
        lastMarkerlng,
        e.latLng.lat(),
        e.latLng.lng()
      );
      distance = calcCoordinatesToDistance(
        lastMarkerlat,
        lastMarkerlng,
        e.latLng.lat(),
        e.latLng.lng()
      );
      tas =
        inputValue.velocity -
        crossWind(inputValue.velocityWind, bearing, inputValue.windDirection);
    }
    console.log("distanceAll" + distanceAll);
    setDistanceALL((distanceALL) => [...distanceALL, { distance }]);
    console.log(distanceAll);
    Setmarker((marker) => [
      ...marker,

      {
        location: { lat: e.latLng.lat(), lng: e.latLng.lng() },
        id: marker.length + 1,
        distance: distance,
        bearing: bearing,
        // //tas: tas,
        // tas: inputValue.velocity,
        // time: calculateTime(tas, inputValue.velocity),
        // velocity: inputValue.velocity,
      },
      //  lastmerker:merker[length-1]
    ]);
    SepoitsToDraw((poitsToDraw) => [
      ...poitsToDraw,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  };

  return (
    <div class="">
      (
      <div>
        <div class="text-4xl sm:text-5xl text-center my-10 mx-10 ">
          Where do you want flight today?
        </div>

        <div class="grid md:grid-cols-2 gap-8 m-15 max-w-15xl m-5 content-center ">
          <div class="bg-white rounded-3xl max-h-full shadow-2xl">
            <div class="flex flex-col max-h-full ">
              <LoadScript googleMapsApiKey="">
                <div class="m-8 ...">
                  <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={6}
                    center={defaultCenter}
                    onClick={(e) => AddNewMarker(e)}
                  >
                    {marker.map((item) => {
                      return (
                        console.log(item),
                        (<Marker key={item.name} position={item.location} />)
                      );
                    })}

                    <Polyline
                      path={poitsToDraw}
                      geodesic={true}
                      options={{
                        strokeColor: "#CD853F",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                        icons: [
                          {
                            // icon: lineSymbol,
                            offset: "0",
                            repeat: "20px",
                          },
                        ],
                      }}
                    />
                  </GoogleMap>
                </div>
              </LoadScript>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-2xl">
            <div class="m-8 ...">
              <div class="grid grid-cols-2 gap-4 m-8">
                <button
                  class="w-full content-center bg-yellow-700 hover:bg-yellow-800 text-white hover:text-blue-50 font-semibold  py-2 px-4 border border-yellow-900 hover:border-yellow-700 rounded"
                  onClick={deletePoints}
                >
                  DELETE ALL POINTS
                </button>
                <button class="w-full content-center bg-yellow-700 hover:bg-yellow-800 text-white hover:text-blue-50 font-semibold  py-2 px-4 border border-yellow-900 hover:border-yellow-700 rounded">
                  <PDFCreator data={marker} />
                </button>
              </div>
              <DataTable2 props={marker} props2={inputValue} />
            </div>
          </div>

          <div class="group col-start-1 col-end-3 bg-white rounded-3xl shadow-2xl">
            {/* <div class="m-0 opacity-0  group-hover:opacity-100 group-hover:m-8">
              <FlightData
                flightdata={(flightData) => setInputValue(flightData)}
              />
            </div> */}
            <div class="m-8 opacity-0  group-hover:opacity-100">
              <FlightData
                flightdata={(flightData) => setInputValue(flightData)}
              />
              <span></span>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default Maps;
