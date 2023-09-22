import { ResWeatherCityDto } from "@/entities/weather/api/types"
import { Box, Card, CardBody, CardHeader, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react"
import { memo } from "react"

type WeatherCardProps = {
  data?: ResWeatherCityDto,
}

export const WeatherCard = memo((props:WeatherCardProps) => {
  const {data} = props
  
  return (
    <Card maxW={'xs'}   mt={"2.5"} >
        <CardHeader mb={'2.5'}>
          <Heading size="md">Weather in {data?.name}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading mb={'2.5'} size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text  pt="2" fontSize="lg" >
              {data?.weather[0].description}
              </Text>
            </Box>
            <Box>
              <Heading mb={'2.5'} size="xs" textTransform="uppercase">
                icon
              </Heading>
             <Image src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}/>
            </Box>
          </Stack>
        </CardBody>
      </Card>
  )
})
