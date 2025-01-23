export interface WeatherActualDay {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    condition: {
        icon: string;
    }
    wind_kph: number;
    humidity: number;
    is_day: number;
}

export interface WeatherForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
            text: string;
            icon: string;
        }
    }
}

export interface WeatherForecast {
    forecastday: WeatherForecastDay[];
}