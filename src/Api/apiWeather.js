import { API, key } from '@/Api/api'

export default {
    getCurrentWeather(params) {
        return API.get(`weather?q=${params.city}&appid=${key}`)
    },
    getForecastWeather(params) {
        return API.get(`onecall?lat=${params.lat}&lon=${params.lan}&units=metric&exclude=minutely,alerts&appid=${key}`)
    }
}