import React from 'react'
import { 
    Grid,
    GridItem,
    Image,
    Box,
    Heading,
    Text,
    List,
    ListItem,
    ListIcon,
    Divider,
 } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import hiMemoji from '../assets/hiMemoji.png'

function About() {
  return (
    <Grid
    h='100vh'
    w='100vw'
    templateRows='repeat(12, 1fr)'
    templateColumns='repeat(24, 1fr)'
  >
    <GridItem rowSpan={12} colSpan={23} display="flex">


    <Image className='goingUp' src={hiMemoji} width="200px" pos='absolute' left="300px" top="300px"/>
      


      <Box m={"auto auto auto 40px"} className='goingUp'>
        <Heading fontSize="6xl" my="10px">About me</Heading>

    
        <List spacing={1}>
          <ListItem display="flex">
            <Text mr="10px">👨🏽‍💻</Text>
            I am a Civil Industrial Engineer.
          </ListItem>
          <ListItem display="flex">
            <Text mr="10px">📽</Text>
            I love to watch Movies and Series.
          </ListItem>
          <ListItem display="flex">
            <Text mr="10px">👨‍👩‍👦</Text>
            I have a beautiful family.
          </ListItem>
          <ListItem display="flex">
            <Text mr="10px">🌧</Text>
            I love the Rainy mood.
          </ListItem>
          <ListItem display="flex">
            <Text mr="10px">🏕</Text>
            And finally I love the forest.
          </ListItem>
        </List>

        <Heading fontSize="2xl" mt="20px">My experience</Heading>
        <Text>2019 : I ended my studies (Civil Industrial Engineering).</Text>
        <Text>2020 : I started an E-Commerce Bussines</Text>
        <Text>2021 : I started to work at my career as Sales Engineer for a company that works with Ultra-Violet Technologies.</Text>
        <Text>2022 : I am unemployed now, looking for an opportunity as Front End Developer.</Text>
        <Divider my="20px" />

        <Text>I was always be a so logical person, so programming always was good for me, at school I used to program with Micro PLC. After that on the university I learned C.</Text>
        <Text>but I was not interested on Front End Developing until mid of my last work (Sales Engineer) when I was finding new solutions for the company, so I started to learn HTML / CSS / JavaScript</Text>
        <Text>then I fall in love to this world, I always want to create something...</Text>

      </Box>



    </GridItem>

    <GridItem rowSpan={12} colSpan={1}>
        <Navbar />
    </GridItem>
    
  </Grid>
  )
}

export default About