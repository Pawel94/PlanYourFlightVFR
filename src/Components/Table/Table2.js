import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { calculateTime } from "../../Calulations/CalculateTime";
import { crossWind } from "../../Calulations/CalculateCrossWind";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function DataTable2({ props, props2 }) {
  const classes = useStyles();
  const [dit, setDit] = useState();
  // const [inputValue, setInputValue] = useState({
  //   velocity: 100,
  //   velocityWind: 2,
  //   windDirection: 140,
  // });
  let distance = 0;
  let time = 0;
  {
    props.map((item) => {
      item.velocity = props2.velocity;
      item.tas =
        props2.velocity -
        crossWind(props2.velocityWind, item.bearing, props2.windDirection);
      item.time = calculateTime(item.tas, props2.velocity);
    });
  }

  return (
    <div>
      {props.length > 0 ? (
        <table class="  border-collapse border-none  min-w-full  text-black ">
          <thead>
            <tr>
              <th class="border-b-2  ">Nr</th>
              <th class="border-b-2  ">LAT</th>
              <th class="border-b-2  ">LANG</th>
              <th class="border-b-2   ">Distance</th>
              <th class="border-b-2  ">Bearing</th>
              <th class="border-b-2  ">Tas</th>
              <th class="border-b-2  ">Time</th>
            </tr>
          </thead>
          <tbody>
            {
              (console.log(props.length),
              props.map((item) => {
                //distance += item.distance;
                console.log(item.length);
                // distance = props.distance.reduce((prev, val) => {
                //   return prev + val;
                // });

                time += item.time;
                return (
                  <tr class="hover:bg-yellow-600 hover:text-white  ">
                    <th class="border-b-2   ">{item.id}</th>
                    <th class="border-b-2   ">
                      {item.location.lat.toPrecision(5)}
                      <span>&#176;</span>
                    </th>
                    <th class="border-b-2   ">
                      {item.location.lng.toPrecision(5)}
                      <span>&#176;</span>
                    </th>

                    {item.distance ? (
                      <th class="border-b-2 ">{item.distance} km</th>
                    ) : (
                      <th class="border-b-2 ">-</th>
                    )}
                    {item.bearing ? (
                      <th class="border-b-2 ">
                        {item.bearing}
                        <span>&#176;</span>
                      </th>
                    ) : (
                      <th class="border-b-2 ">-</th>
                    )}
                    {item.time ? (
                      <th class="border-b-2 ">{item.tas}</th>
                    ) : (
                      <th class="border-b-2 ">-</th>
                    )}

                    <th class="border-b-2 ">{item.time}'</th>
                    <th class="border-b-2 ">{item.velocity}'</th>
                    <hr></hr>
                  </tr>
                );
              }))
            }
            <hr></hr>
            <tr class=" border-collapse border-none min-w-full text-red-600">
              <th class="border-b-2  text-red">-</th>
              <th class="border-b-2  ">-</th>
              <th class="border-b-2  ">-</th>
              <th class="border-b-2   ">{distance} km</th>
              <th class="border-b-2  ">{time}'</th>
            </tr>
          </tbody>
        </table>
      ) : (
        <div class="text-4xl sm:text-5xl text-center my-10 mx-10 ">
          <p>Add points to calculate your track!</p>
        </div>
      )}
    </div>
  );
}

export default DataTable2;
