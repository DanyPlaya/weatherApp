
export type Weather = {
    weather:Array<{
        id: number,
        main: string,
        description:string,
        icon:string,
    }>
        
    name:string,
    
        
}

export type WeatherSchema = {
    weatherData?:Weather['weather'],
}