import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { getWeatherForecast } from "../../hooks/weather_call";
import { WeatherForecast } from "../../types/weather";

import '../../styles/WeatherForecast/weatherForecast.css'

export const WeatherForecastPage = (): JSX.Element => {
  const [weatherForecast, setWeatherForecast] =
    useState<WeatherForecast | null>(null);

  useEffect(() => {
    getWeatherForecast().then((data) => setWeatherForecast(data));
  }, []);

  return (
    <div className="weather-forecast-page">
      {weatherForecast?.forecastday.map((day) => {
        return (
          <MDBCard key={day.date}>
            <MDBCardBody>
              <MDBCardTitle>{day.date}</MDBCardTitle>
              <div className="image">
                <img
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                />
              </div>
              <MDBCardText>
                <div className="max-temp"> Max Temp: {day.day.maxtemp_c}°C</div>
                <div className="min-temp"> Min Temp: {day.day.mintemp_c}°</div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        );
      })}
    </div>
  );
};
