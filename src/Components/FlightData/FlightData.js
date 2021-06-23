import React, { useState } from "react";

// import { Context } from "../Maps/Maps";
function FlightData({ flightdata }) {
  const [velocity, SetVelocity] = useState("");
  const [wrong, SetWrongState] = useState({
    state: false,
    communicat: "Error",
  });
  const [distanceAll, setDistanceALL] = useState();
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState({
    velocity: 120,
    velocityWind: 2,
    windDirection: 140,
  });
  const onInputchangeVelocity = (event) => {
    SetVelocity({
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (evt) => {
    console.log(name);
    // evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };
  console.log(flightdata);
  const onChangeHandler = (event) => {
    (event.target.name === "windDirection" &&
      (event.target.value > 360 || event.target.value < 1)) ||
    (event.target.name === "velocityWind" && event.target.value < 0)
      ? SetWrongState({ state: true, communicat: "Wind is not good :(" })
      : setInputValue(
          {
            ...inputValue,
            [event.target.name]: event.target.value,
          },
          SetWrongState(false),
          flightdata({ ...inputValue, [event.target.name]: event.target.value })
        );

    console.log(wrong);
  };

  return (
    <form class="text-black">
      {wrong.state ? (
        <div
          class="bg-red-300 border-t border-b border-yellow-500 text-yellow-700 px-4 py-3"
          role="alert"
        >
          <p class="font-bold">{wrong.communicat}</p>
        </div>
      ) : null}

      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="grid-zip"
          >
            wind direction
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90"
            type="text"
            name="windDirection"
            onChange={onChangeHandler}
            value={inputValue.windDirection}
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="velocityWind"
          >
            wind VELOCITY
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="velocityWind"
            type="text"
            placeholder="0"
            type="text"
            name="velocityWind"
            onChange={onChangeHandler}
            value={inputValue.velocityWind}
            min="1"
            max="250"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 ">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            your velocity
          </label>
          <input
            class="block w-full bg-gray-200 text-gray-900 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:text-black"
            id="velocity"
            type="text"
            name="velocity"
            placeholder="100"
            onChange={onChangeHandler}
          />
        </div>
        {/* <input type="submit" value="Submit" /> */}
      </div>
    </form>
  );
}

export default FlightData;
