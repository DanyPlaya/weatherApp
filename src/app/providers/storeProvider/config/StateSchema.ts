import { WeatherSchema } from "@/entities/weather/model/types"
import { baseApi } from "@/shared/api"

export type StateSchema = {
    weather: WeatherSchema
    [baseApi.reducerPath] : ReturnType<typeof baseApi.reducer>
}