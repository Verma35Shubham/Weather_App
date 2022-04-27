import React, { useEffect, useState } from "react";
import './App.css';
import { FaBars, FaBeer, FaSun, FaHome } from "react-icons/fa";
import Weatherinfo from "./Weatherinfo";

const App = () => {

  const [getcity, setcity] = useState("deoria")
  const [getdata, setdata] = useState({})


  const getcityinfo = async () => {


    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${getcity}&units=metric&appid=79817ecc53a395d9ed3ea45af1bfa651`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, pressure, humidity } = data.main;
      const { country, sunset } = data.sys;
      const { name } = data
      const { main: weather } = data.weather[0];
      const { speed } = data.wind;


      const myweatherifo = { temp, pressure, humidity, country, sunset, name, weather, speed }

      setdata(myweatherifo)

    }
    catch (error) {
      console.log(error);

    }

  }


  useEffect(() => { getcityinfo() }, [])

  return (
    <>
      <div className="main">
        {/*--------------------------------------------header---------------------------------  */}
        <div className="header">
          <div className="icon">
            <h1>Weather Information of All Land.</h1>
          </div>
          <h2 className="ico"></h2>
          <div className="menues">

            <ul>
              <li><p style={{ paddingRight: '5px' }}><FaHome /></p>Home</li>
              <li><p><FaBeer /></p>Contact</li>
              <li><p><FaSun/></p>Help</li>
              <li className="lastli"><p><FaBars /></p>About</li>
            </ul>

          </div>


          <div className="searchbar">
            <input type="text"
              onChange={(e) => setcity(e.target.value)}
              placeholder="Search... For a City" />
            <button onClick={getcityinfo}>Go</button>
          </div>
        </div><hr /><hr />
        {/* ---------------------------------------content------------------------------------- */}
        <Weatherinfo info={getdata} />
      </div>
    </>
  );
}

export default App; 