import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.openweathermap.org/data/2.5/weather',

    }), 
    endpoints: ()=>({})
}) 