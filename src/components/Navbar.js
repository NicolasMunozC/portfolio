import React from 'react'
import { 
  Grid,
  GridItem,
  IconButton,
  Button,
  Text,
  useColorMode,
 } from '@chakra-ui/react'
import { 
  MdDarkMode,
  MdLightMode,
 } from "react-icons/md";
 import { 
  FaGithub,
  FaLinkedinIn,
   } from "react-icons/fa";


function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <Grid
    h='100vh'
    w='100%'
    templateRows='repeat(12, 1fr)'
    templateColumns='repeat(1, 1fr)'
    align="center"
    py="2rem"
    px="1rem"
    >
      <GridItem rowSpan={1}>
        <IconButton variant='ghost' colorScheme='teal' isRound fontSize='30px' icon={colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />} onClick={toggleColorMode}/>
      </GridItem>
      <GridItem rowSpan={2} />

      <GridItem rowSpan={1}>
        <Button variant='unstyled' className='rotateLink'>:)</Button>
      </GridItem>

      <GridItem rowSpan={1}>
        <Button variant='unstyled' className='rotateLink'>it</Button>
      </GridItem>
      <GridItem rowSpan={1}>
        <Button variant='unstyled' className='rotateLink'>on</Button>
      </GridItem>
      <GridItem rowSpan={1} >
        <Button variant='unstyled' className='rotateLink'>Working</Button>
      </GridItem>

      <GridItem rowSpan={1} />

      <GridItem rowSpan={1}>
      <IconButton variant='ghost' colorScheme='teal' isRound fontSize='25px' icon={<FaLinkedinIn />}/>
      </GridItem>

      <GridItem rowSpan={1}>
      <IconButton variant='ghost' colorScheme='teal' isRound fontSize='25px' icon={<FaGithub />}/>
      </GridItem>

    </Grid>
  )
}

export default Navbar