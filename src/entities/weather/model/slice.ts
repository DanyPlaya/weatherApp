import { createSlice } from "@reduxjs/toolkit";
import { WeatherSchema } from "./types";
import { weatherApi } from "../api/weatherApi";

const initialState: WeatherSchema = {
    weatherData: undefined,

}

export const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) =>{
        builder.addMatcher(
            weatherApi.endpoints.getWeatherByCityName.matchFulfilled, (state: WeatherSchema,{payload}) =>{
                state.weatherData = payload.weather
            }
        )
    }
})
export const {actions: weatherActions} = weatherSlice
export const {reducer:weatherReducer} = weatherSlice