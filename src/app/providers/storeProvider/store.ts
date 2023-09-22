/* eslint-disable @typescript-eslint/no-unused-vars */


import { baseApi } from '@/shared/api'
import {StateSchema} from './config/StateSchema'
import {ReducersMapObject,configureStore} from '@reduxjs/toolkit'
import { weatherReducer } from '@/entities/weather'
export function createStore(
    initialState?:StateSchema
){
    const rootReducers: ReducersMapObject<StateSchema> = {
        weather: weatherReducer,
        [baseApi.reducerPath]: baseApi.reducer
    }
    const store = configureStore({
        reducer:rootReducers,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware) 
    })
    return store
}
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];