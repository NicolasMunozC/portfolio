import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

function Home() {
  return (
    <Grid
    h='100vh'
    templateRows='repeat(12, 1fr)'
    templateColumns='repeat(12, 1fr)'
  >
    <GridItem rowSpan={12} colSpan={11} bg='tomato' />
    <GridItem rowSpan={12} colSpan={1} bg='papayawhip' />
  </Grid>
  )
}

export default Home