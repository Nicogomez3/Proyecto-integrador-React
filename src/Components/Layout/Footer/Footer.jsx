import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Flex as="footer" bg="#fff8dc" justify="center"  w="100vw" margin="0 auto" p="20px" color="black">
        <Flex as="ul" listStyleType="none" gap="4" >
            <li>Terminos de uso</li>
            <li>Nosotros</li>
            <li>Contacto</li>
        </Flex>
    </Flex>
  )
}
