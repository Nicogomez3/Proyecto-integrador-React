import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const ChooseUs = () => {
  return (
    <>
        <Flex 
        as="section"
        bgImage="/img/chooseus.jpg"
        bgSize="cover"
        width="100%"
        height="100vh"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        justify="center"
        fontFamily="Tangerine"
        alignItems={{base:'center', lg:'flex-end'}}
        >
            <Link to='/About'>
                <Text as="h2" fontWeight="600" filter="drop-shadow(2px 4px 6px black)" fontSize={{ base:'4xl', sm:'5xl', md:'6xl', lg:'8xl'}} color="white" display="block" >POR QUÉ 
                    
                <Text as="h2" filter="drop-shadow(2px 4px 6px black)" fontWeight="600" fontSize={{ base:'4xl', sm:'5xl', md:'6xl', lg:'8xl'}} color="white" >ELEGIRNOS?</Text>    
                
                </Text>
              
            </Link>    

        </Flex>
    </>
  )
}

