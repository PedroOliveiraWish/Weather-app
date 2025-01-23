import { WeatherActualDay } from "../types/weather"
import { WeatherForecast } from "../types/weather"

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY); // Make sure this logs the key


export const getWeatherActualDay = async (): Promise<WeatherActualDay | null> => {

    const url: string = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip`

    try {
        const response: Response = await fetch(url, { method: 'GET', mode: 'cors', headers: { 'Content-Type': 'application/json' } })

        const data = await response.json()

        return data.current as WeatherActualDay
    } catch (error) {
        console.error(error)
        return null
    }
}

export const getWeatherForecast = async (): Promise<WeatherForecast | null> => {
    const url: string = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=auto:ip&days=4`

    try {
        const response: Response = await fetch(url, { method: 'GET', mode: 'cors', headers: { 'Content-Type': 'application/json' } })

        const data = await response.json()

        return data.forecast as WeatherForecast
    } catch (error) {
        console.error(error)
        return null
    }
}