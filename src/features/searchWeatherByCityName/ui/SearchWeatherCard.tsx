import { useLazyGetWeatherByCityNameQuery } from "@/entities/weather/api/weatherApi";
import { WeatherCard, WeatherCardSkeleton } from "@/entities/weatherCard";
import {
  Box,
  Button,
  Flex,
  Input
} from "@chakra-ui/react";
import { memo } from "react";
import { useForm } from "react-hook-form";
type InputValue = {
  cityName:string;
}
export const SearchWeatherCard = memo(() => {
  const {register,getValues} = useForm<InputValue>()
  //const [position,setPosition] = useState({lat:0,lon:0})
  const [getWeather,{isFetching,isLoading,data}] = useLazyGetWeatherByCityNameQuery();
  
  
  const handleSearch = () => {
    const cityName = getValues('cityName');
    if(cityName.trim().length > 0){
      getWeather({city: cityName})
    }
    
  };

  return (
    <Box ml={'2.5'}>
      <Flex>
      <Input placeholder="Enter your city" mt={'2.5'} maxW={'xs'} {...register('cityName')}  />
      <Button onClick={handleSearch} ml={'2.5'} mt={'2.5'}>Search Weather</Button>
      </Flex>
      {(isLoading || isFetching || !data)  ? <WeatherCardSkeleton/> : <WeatherCard data={data}/>}
 
    </Box>
  );
});
