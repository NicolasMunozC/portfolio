import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Grid,
  GridItem,
  IconButton,
  Button,
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
    gap={10}
    >
      <GridItem rowSpan={1}>
        <IconButton variant='ghost' colorScheme='teal' isRound fontSize='30px' icon={colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />} onClick={toggleColorMode}/>
      </GridItem>
      <GridItem rowSpan={2} />
      <GridItem rowSpan={1}>
      <Link to='/'><Button variant='unstyled' className='rotateLink'>Home</Button></Link>
      </GridItem>
      <GridItem rowSpan={1}>
      <Link to='/about'><Button variant='unstyled' className='rotateLink'>About</Button></Link>
      </GridItem>
      <GridItem rowSpan={1}>
      <Link to='/work'><Button variant='unstyled' className='rotateLink'>Work</Button></Link>
      </GridItem>

      <GridItem rowSpan={1} my="20px">
      <Link to='/experiments'><Button variant='unstyled' className='rotateLink'>Experiments</Button></Link>
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