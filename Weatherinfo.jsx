import React from "react";
import './App.css'
import Timeupt from "./TimeUp";

const Weatherinfo = ({ info }) => {
    const { temp, pressure, humidity, country, sunset, name, weather, speed } = info;
    let suns = new Date(sunset * 1000);

    let p = "";
    if (weather == "Cloudes") {
        p = "wi wi-cloudy";
    }
    else if (weather == "Clear") {
        p = "wi wi-solar-eclipse";
    }
    else if (weather == "Haze") {
        p = "wi wi-day-sunny";
    }
    else if (weather == "Rain") {
        p = "wi wi-rain-mix";
    }
    else if (weather == "Sunny") {
        p = "wi wi-day-sunny";
    }

    console.log(weather)
    return (
        <>
            <div className="content">
                <div className="card">
                    <div className="icon2">
                        <p className="weatherMood"><i className={p}></i></p>
                    </div>
                    <div className="info">
                        <div className="tempmood">
                            <div className="temp">
                                <h1 className="tempdeg">{temp}&deg;</h1>
                            </div>
                            <div className="mood">
                                <h1 className="mood1">{weather}</h1>
                                <p className="city">{name} {country}</p>
                            </div>
                        </div>
                        <div className="datetime">
                            <div className="date">
                                <h2>{new Date().toDateString()}</h2>
                            </div>
                            <div className="time">
                                <h2 style={{color:'black'}}><Timeupt/></h2>
                            </div>

                        </div>
                    </div>
                    <div className="fourblocks">
                        <div className="block1">
                            <p className="logo"><i className="wi wi-horizon-alt"></i></p>
                            <p className="information">{suns.getHours()}:{suns.getMinutes()}</p>
                            <p className="information">Sunset</p>
                        </div>
                        <div className="block1">
                            <p className="logo"><i className="wi wi-humidity"></i></p>
                            <p className="information">{humidity}</p>
                            <p className="information">Humidiy</p>
                        </div>
                        <div className="block1">
                            <p className="logo"><i className="wi wi-rain"></i></p>
                            <p className="information">{pressure}</p>
                            <p className="information">Pressure</p>
                        </div>
                        <div className="block4">
                            <p className="logo"><i className="wi wi-strong-wind"></i></p>
                            <p className="information">{speed}</p>
                            <p className="information">Spped</p>
                        </div>

                    </div>
                </div>

            </div>
            {/* -------------------------------------------Footer---------------------------------- */}
            <div className="footer">
                <h3 style={{ textAlign: 'center', color: 'white', fontSize: '30px' }}>Created by <br /> SHUBAHM VERMA</h3>
            </div>
        </>
    );
}


export default Weatherinfo; 