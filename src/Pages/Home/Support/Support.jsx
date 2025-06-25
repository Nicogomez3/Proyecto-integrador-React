import { Box, Button, Container, Heading, Img,  Text } from '@chakra-ui/react'

import { IoTimeOutline } from "react-icons/io5";

import React from 'react'
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <>
        <Container display="flex" flexDirection={{base:"column", xl:"row"}} margin="0px"  alignItems="center" justifyContent="space-evenly" p="60px" maxWidth="100%" marginInlineStart="20px" marginInlineEnd="20px" width="100%" >
            <Img borderRadius="20px" width="800px" objectFit="cover" height="400px" src="/img/support.avif" />
            <Box as="div" bg="#fff8dc" boxShadow="2xl" borderRadius="20px" p="30px" display="flex" flexDirection="column" alignItems="flex-start">
                <Heading display="flex" gap="4" alignItems="center" as="h2">Soporte 24/7
                    {/* <MdContactSupport /> */}
                    <IoTimeOutline />
                </Heading>
                <Text marginTop="30px" as="p">Si tienes alguna duda o problema, no dudes en contactarnos.</Text>
                <Text as="p">Estamos disponibles las 24 horas del dia, los 7 dias de la semana.</Text>
                <Button marginTop="30px" bg="white" p="10px 15px" borderRadius="12px">
                    <Link to="/Contact"   >
                    Contactanos
                    </Link>
                </Button>
             
            </Box>
        </Container>
    </>
  )
}

export default Support