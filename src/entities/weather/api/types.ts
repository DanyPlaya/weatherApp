
export type ResWeatherCityDto = {
    weather:[
        {
            id: number,
            main: string,
            description:string,
            icon:string,
        }
    ]
    name:string
}
export type ReqWeatherCityDto = {
    city: string,
}

export type ReqWeatherByLatLonDto = { 
    lat:number,
    lon:number,
}