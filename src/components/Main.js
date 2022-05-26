import { 
  Box,
  Heading,
  Tag,
  Text,
  Show,
  Image,
 } from '@chakra-ui/react'
 import hiMemoji from '../assets/hiMemoji.png'

function Main() {
  return (
    <Box h="100%" w="100%" display="flex" className='goingUp'>

      <Box m="auto auto auto 20px">
        <Box my="15px" opacity="0.7">
          <Tag w={["10px", "30px", "70px"]} mx="4px" colorScheme="blue"></Tag>
          <Tag w={["10px", "30px", "50px"]} mx="4px" colorScheme="cyan"></Tag>
          <Tag w={["50px", "90px", "200px"]} mx="4px" colorScheme="green" justifyContent="center">HTML</Tag>
          <Tag w={["10px", "10px", "80px"]} mx="4px" colorScheme="orange"></Tag>
          <Tag w={["10px", "10px", "80px"]} mx="4px" colorScheme="pink"></Tag>
          <Tag w={["40px", "40px", "70px", "200px"]} mx="4px" colorScheme="blue" justifyContent="center">CSS</Tag>
        </Box>
        <Box my="15px" opacity="0.7">
          <Show above='sm'>
          <Tag w={["10px", "20px", "30px"]} mx="4px" colorScheme="pink"></Tag>
          <Tag w={["10px", "50px", "90px"]} mx="4px" colorScheme="gray"></Tag>
          </Show>
          <Tag w={["80px", "100px", "130px"]} mx="4px" colorScheme="blue" justifyContent="center">React JS</Tag>
          <Tag w={["10px", "30px", "30px"]} mx="4px" colorScheme="green"></Tag>
          <Tag w={["10px", "50px", "130px"]} mx="4px" colorScheme="purple"></Tag>
          <Tag w={["10px", "20px", "60px"]} mx="4px" colorScheme="red"></Tag>
        </Box>

        <Box my="15px" opacity="0.7">
          <Tag w={["10px", "20px", "60px"]} mx="4px" colorScheme="green"></Tag>
          <Tag w={["90px", "100px", "110px"]} mx="4px" colorScheme="yellow" justifyContent="center">JavaScript</Tag>
          <Show above='sm'>
          <Tag w={["10px", "40px", "60px"]} mx="4px" colorScheme="cyan"></Tag>
          <Tag w={["10px", "20px", "40px"]} mx="4px" colorScheme="teal"></Tag>
          <Tag w={["10px", "10px", "20px"]}mx="4px" colorScheme="gray"></Tag>
          </Show>
          <Tag w={["80px", "120px", "140px"]} mx="4px" colorScheme="blue" justifyContent="center">WordPress</Tag>
        </Box>

        <Box display="flex">
          <Heading fontSize={{ base: '26px', sm: '35px', md:'50px', lg: '90px'}} fontWeight="thin" marginRight="3px">Hi I am</Heading>
          <Heading fontSize={{ base: '26px', sm: '35px', md:'50px', lg: '90px'}} fontWeight="bold">Nicolás Muñoz</Heading>
        </Box>

        <Box>
        <Text fontSize={{base: '12px', sm: '15px', md:'25px', lg: '35px'}} fontWeight="light">Front End Developer | Civil Industrial Engineer</Text>
        </Box>

        <Box my="15px" opacity="0.7">
          <Tag w={["80px", "100px", "120px"]} mx="4px" colorScheme="green" justifyContent="center">Node JS</Tag>
          <Tag w={["10px", "10px", "20px"]} mx="4px" colorScheme="cyan"></Tag>
          <Tag w={["90px", "100px", "120px"]} mx="4px" colorScheme="green" justifyContent="center">Mongo DB</Tag>
          <Show above='sm'>
          <Tag w={["10px", "10px", "80px"]} mx="4px" colorScheme="orange"></Tag>
          <Tag w={["10px", "10px", "80px"]} mx="4px" colorScheme="pink"></Tag>
          <Tag w={["10px", "10px", "80px"]} mx="4px" colorScheme="blue"></Tag>
          </Show>
          <Tag w={["10px", "10px", "80px"]} colorScheme="blue"></Tag>
        </Box>
        
        <Box my="15px" opacity="0.7">
          <Tag w={["10px", "10px", "80px"]} mx="4px" colorScheme="purple"></Tag>
          <Tag w={["90px", "100px", "120px"]} mx="4px" colorScheme="pink" justifyContent="center">Express JS</Tag>
          <Tag w={["10px", "30px", "80px"]} mx="4px" colorScheme="red"></Tag>
          <Tag w={["10px", "50px", "100px"]} mx="4px" colorScheme="orange"></Tag>
          <Show above='sm'>
          <Tag w={["10px", "20px", "50px"]} mx="4px" colorScheme="blue"></Tag>
          <Tag w={["10px", "17px", "100px"]} mx="4px" colorScheme="teal"></Tag>
          </Show>
        </Box>
        <Box my="15px" opacity="0.7">
          <Tag w={["10px", "10px", "50px"]} mx="4px" colorScheme="gray"></Tag>
          <Tag w={["70px", "80px", "150px"]} mx="4px" colorScheme="green" justifyContent="center">Shopify</Tag>
          <Show above='sm'>
          <Tag w={["10px", "10px", "30px"]} mx="4px" colorScheme="cyan"></Tag>
          <Tag w={["10px", "10px", "170px"]} mx="4px" colorScheme="purple"></Tag>
          <Tag w={["10px", "10px", "30px"]} mx="4px" colorScheme="red"></Tag>
          </Show>
          <Tag w={["115px", "120px", "170px"]} mx="4px" colorScheme="teal" justifyContent="center">WooCommerce</Tag>
        </Box>

      </Box>
      


    </Box>
  )
}

export default Main