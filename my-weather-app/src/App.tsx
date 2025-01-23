import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { WeatherDay } from './components/ActualDay/ActualDay';
import { WeatherForecastPage } from './components/Forecast/WeatherForecast';
import { Header } from './components/Header/header';

import './styles/AppStyle/app.css'

function App() {
  return (
    <div className="app">
      <MDBRow>
        <MDBCol md={3}>
          <WeatherDay />
        </MDBCol>
        <MDBCol md={9} className="forecast">
          <Header />
          <WeatherForecastPage />
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default App;
