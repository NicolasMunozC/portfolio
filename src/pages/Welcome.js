import React from 'react'
import { 
    // Heading,
    Box,
 } from '@chakra-ui/react'

function Welcome() {
    // const words = ["Hello", "Hola", "Welcome", "Bienvenido/a"]
    // const [message, setMessage] = React.useState(words[0])
    // let wordIndex = 0

    // React.useEffect( ()=>{
    //     setInterval( ()=>{
    //         if(wordIndex < words.length){
    //             wordIndex++
    //         }else{
    //             wordIndex=0
    //         }
    
    //         setMessage(words[wordIndex])
    
    //     },10000)
    // },[])

  return (
    <Box bg='#0d1321' h='100vh' w='100vw' display='flex' m='auto'>
    {/* <Box m='auto' align='center'>
        <Heading fontSize='5xl' color='white' className='typing'>{message}</Heading>
    </Box> */}
</Box>
  )
}

export default Welcome