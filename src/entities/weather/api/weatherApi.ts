import { baseApi } from "@/shared/api";
// import { Weather } from "../model/types";
import { ReqWeatherByLatLonDto, ReqWeatherCityDto, ResWeatherCityDto } from "./types";
// import { WeatherCityDto } from "./types";

export const weatherApi = baseApi.injectEndpoints({

    endpoints:(build) =>({
        getWeatherByCityName: build.query<ResWeatherCityDto,ReqWeatherCityDto>({
            query:(body)=>({
                url: `?q=${body.city}&appid=${import.meta.env.VITE_API_KEY}&lang=ru`,
            })  
        }),
        getWeatherByLatLon:build.query<ResWeatherCityDto,ReqWeatherByLatLonDto>({
            query:(body) =>({
                url: `?lat=${body.lat}&lon=${body.lon}&appid=${import.meta.env.VITE_API_KEY}`
            })
        })
    })
})
export const  {useGetWeatherByCityNameQuery,useLazyGetWeatherByCityNameQuery,useLazyGetWeatherByLatLonQuery} = weatherApi