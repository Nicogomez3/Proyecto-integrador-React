import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Discover = () => {
  return (
    <>
        <Container display="flex" flexDirection={{base:'column', md:'column', lg:'row'}} width="100%" margin="0px" marginInlineStart="0px" marginInlineEnd="0px" maxWidth="100%" paddingInlineStart="0px" paddingInlineEnd="0px">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start"  h="700px"  p="60px" bg="#fffcf2" gap="40px" width={{base:"100%", lg:"50%"}}>
                <Heading width="80%" fontFamily="Tangerine" fontSize={{base:'4xl', lg:"62px"}} >Nuestro compromiso con la excelencia</Heading>
                <Text fontWeight="semi-bold" fontFamily="Tangerine" width={{base:'60%', lg:'40%'}} fontSize="4xl">Satisfacción garantizada en cada compra</Text>
                <Text fontSize="3xl" fontFamily="Tangerine" width={{base:'80%', lg:'50%'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime accusantium aliquam earum dolores pariatur dolorum, velit laudantium numquam incidunt soluta.</Text>
                <Button to="/Products" bg="#eddea4">
                  <Link to="/Products">Descubre más</Link>
                </Button>
            </Box>
            <Box bg="#f7ede2" p="50px" width={{base:"100%", lg:"50%"}} h="700px" display="flex" justifyContent="center" allignItems="center">
                <img width="500px" src="/img/discover.jpg" alt="banner2" />
            </Box>
        </Container>
    
    </>
  )
}

