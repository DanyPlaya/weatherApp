import { Box, Card, CardBody, CardHeader, Heading, SkeletonCircle, SkeletonText, Stack, StackDivider } from "@chakra-ui/react"

export const WeatherCardSkeleton = () =>{
    return(
        <Card maxW={'xs'} mt={"2.5"} >
        <CardHeader  >
          <Heading   size="md">
            Weather in {<SkeletonText mt={'2.5'} size='10' />}
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading mb={'2.5'} size="xs" textTransform="uppercase">
                Description
              </Heading>
                <SkeletonText size='10' />
            </Box>
            <Box>
              <Heading mb={'2.5'} size="xs" textTransform="uppercase">
                icon
              </Heading>
                <SkeletonCircle size='10' />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    )
}