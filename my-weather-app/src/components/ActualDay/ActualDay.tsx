import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { getWeatherActualDay } from "../../hooks/weather_call";
import { WeatherActualDay } from "../../types/weather";

import '../../styles/ActualDay/actualDay.css'

export const WeatherDay = (): JSX.Element => {
  const [weather, setWeather] = useState<WeatherActualDay | null>(null);

  useEffect(() => {
    getWeatherActualDay().then((data) => setWeather(data));
  }, []);

  return (
    <div className="weather-day">
      <MDBRow>
        <MDBCol>
          <div className="text-date">{weather?.last_updated}</div>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{padding: '0'}}>
        <MDBCol>
          <div className="weather_info">
            <div className="icon_weather">
              <img src={weather?.condition.icon} alt="icon" />
            </div>
            <div className="temp_weather">
              <div className="temp">{weather?.temp_c} °C</div>
            </div>
          </div>
          <div className="is_day">
            <div className="is_day_text">{weather?.is_day ? "Day" : "Night"} </div>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div className="humidity">
            <div className="humidity_text">Humidity:</div>
            <div className="humidity_value">{weather?.humidity} %</div>
          </div>
        </MDBCol>
        <MDBCol>
          <div className="wind">
            <div className="wind_text">Wind:</div>
            <div className="wind_value">{weather?.wind_kph} km/h</div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
