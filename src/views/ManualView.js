import React, { useState, useEffect } from "react";

const ManualView = () => {
  const [state, SetState] = useState([]);
  const [filterState, setfilterState] = useState([]);
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("https://danepubliczne.imgw.pl/api/data/synop").then((response) =>
      response.json().then((places) => {
        SetState(places);
        setfilterState(places);
      })
    );

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  console.log(state);
  console.log(state.length);
  const handleChange = (event) => {
    let newArr = state.filter((items) => {
      return items.stacja
        .toUpperCase()
        .includes(event.target.value.toUpperCase());
    });
    setfilterState(newArr);
  };

  return (
    <div class="grid grid-cols-1 gap-3 m-15 max-w-15xl m-5 bg-white rounded-3xl  shadow-2xl p-5 flex justify-center  ">
      <div class="">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold "
          for="grid-first-name"
        >
          Find City
        </label>
        <input
          class="border"
          type="text"
          //value={}
          onChange={handleChange}
        />
      </div>
      <table class="table-auto border-collapse shadow-lg  text-black font-mono  ">
        <thead>
          <tr>
            <th class="w-1/5 border px-8 py-4 ...">City</th>
            <th class="w-1/5 border px-8 py-4 ...">Wind course</th>
            <th class="w-1/5 border px-8 py-4 ...">Wind Velocity</th>
            <th class="w-1/5 border px-8 py-4 ...">Temperature</th>
            <th class="w-1/5  border px-8 py-4 ...">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {filterState.length > 0 ? (
            filterState.map((item) => {
              return (
                <tr class="hover:bg-yellow-600 shadow-inner hover:text-white ">
                  <td class="border px-8 py-4 ">{item.stacja}</td>
                  <td class="border px-8 py-4">
                    {item.kierunek_wiatru}
                    <span>&#176;</span>
                  </td>
                  <td class="border px-8 py-4 ">{item.predkosc_wiatru}m/s</td>
                  <td class="border px-8 py-4">
                    {item.temperatura} <span>&#176;</span>C{" "}
                  </td>
                  <td class="border px-8 py-4">{item.wilgotnosc_wzgledna}%</td>
                </tr>
              );
            })
          ) : (
            <p>Download data from imgw.pl/ no DATA</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManualView;
