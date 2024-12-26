import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


import React from 'react'

export const Hero = () => {
  return (
    <>
   

    <Flex 
        as="section" 
        bg="white" 
        bgImage="/img/banner3.jpg"
        bgSize="cover" 
        width="100%" 
        flexDirection={{base:'column', lg:'row'}}
        bgPosition="center" 
        bgRepeat="no-repeat"   
        height="100vh" 
        bgAttachment="fixed"
        fontFamily="Tangerine"
        justify={{base:'center', lg:'space-between'}} 
        alignItems={{base:'flex-start', lg:'flex-end'}}
        boxShadow="0px 6px 14px 1px rgba(0,0,0,0.69);" >
        <Heading as="h1"  p ="20px"> 
            <Text as="span" fontWeight="700"   color="white" fontSize={{base:'5xl', sm:'6xl', md:'8xl', lg:'8xl'}} filter="drop-shadow(2px 4px 6px black)" display="block" >HOLA,
                <Text as="span" filter="drop-shadow(2px 4px 6px black)" color="gray.400" fontSize={{base:'2xl', lg:'3xl'}} marginLeft="20px" >
                SOMOS
                </Text>
            </Text> 
        
            <Text as="span" fontWeight="700" color="white" filter="drop-shadow(2px 4px 6px black)"  fontSize={{base:'5xl', sm:'6xl', md:'8xl', lg:'9xl'}}>
                DECOSHOP
            </Text> 
        </Heading>
        <Container  as="section" maxW="600px" margin="0" p="20px" display="flex" flexDirection="column" >
            <Container  display="flex" gap="4" w="0%" marginStart="0" marginInlineStart="0">
                <Container as="span" bg='black' color='white'  borderRadius="50%"  display="flex" alignItems="center" justifyContent="center"  width={{base:'40px', lg:'50px'}} height={{base:'40px', lg:'50px'}}>
                    <FaFacebookF />
                </Container>
                <Container as="span" bg='black' color='white'   borderRadius="50%"  display="flex" alignItems="center" justifyContent="center" width={{base:'40px', lg:'50px'}} height={{base:'40px', lg:'50px'}}>
                    <FaInstagram />
                </Container>
                
            </Container>
         
            <Text as="p" filter="drop-shadow(2px 4px 6px black)" fontFamily="arial" fontSize={{base:'2xl', lg:'3xl'}} w="100%" color="white" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi incidunt voluptas est, quam, aperiam veniam alias tenetur fugit quisquam ut. Deleniti tempora ea corrupti unde, magni fugit eligendi reprehenderit.</Text>
        </Container>
    </Flex>
    </>

  )
}

