import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function Home() {

    return (
      <>
    <Grid
    h='100vh'
    w='100vw'
    templateRows='repeat(12, 1fr)'
    templateColumns='repeat(24, 1fr)'
  >
    <GridItem rowSpan={12} colSpan={23}>
      <Main />
    </GridItem>

    <GridItem rowSpan={12} colSpan={1}>
        <Navbar />
    </GridItem>
    
  </Grid>
  

  </>
  )
}

export default Home