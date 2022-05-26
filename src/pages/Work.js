import { 
    Grid,
    GridItem,
    Image,
    Box,
 } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

function Work() {
  return (
    <Grid
    h='100vh'
    w='100vw'
    templateRows='repeat(12, 1fr)'
    templateColumns='repeat(24, 1fr)'
  >
    <GridItem rowSpan={12} colSpan={23} display="flex">

      <Box m="auto">

      </Box>



    </GridItem>

    <GridItem rowSpan={12} colSpan={1}>
        <Navbar />
    </GridItem>
    
  </Grid>
  )
}

export default Work