"use client";

import { Input } from "@/components/ui/input.jsx";
import { Icons } from "@/components/ui/icons";
import { useState } from "react";

export default function Home() {
  const apiKey = "ae072808e1fe0c4a6551ea58d11d0e09";

  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [city, setCity] = useState("");
  const [wind, setWind] = useState(0);
  const [weather, setWeather] = useState("");

  async function callToApi() {
    let inputValue = event.target.closest("div").firstChild.value;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiURL);
    const data = await response.json();
    try {
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setCity(data.name);
      setWind(data.wind.speed);
      setWeather(data.weather[0].main);
      console.log(data.weather[0].main);
    } catch (error) {
      alert("Wrong name, you must enter other name");
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center font-sans bg-linear-to-r from-violet-700 via-indigo-700 to-indigo-800">
      <div className="h-200 w-150 rounded-2xl bg-linear-to-br from-cyan-300 via-emerald-200 to-indigo-900 flex  flex-col">
        <div className="flex justify-center mt-10">
          <Input onClick={callToApi} />
        </div>
        <div className="flex h-[75%] flex-col justify-center items-center">
          <Icons weather={weather} />
          <p className="text-black text-[50px] font-bold">{temp}ºC</p>
          <p className="text-black text-[30px] font-bold">{city}</p>
        </div>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="#000"
          >
            <path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z" />
          </svg>
          <p className="text-black text-[20px] m-4">
            {humidity}% <br />
            Humility
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="#000"
          >
            <path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z" />
          </svg>
          <p className="text-black text-[20px] m-4">
            {wind}km/h <br />
            Wind speed
          </p>
        </div>
      </div>
      <footer>
        <p className="ml-10 font-bold text-[30px] bg-blue-300 rounded px-3 py-3 text-black">Made by rugby01</p>
      </footer>
    </main>
  );
}
