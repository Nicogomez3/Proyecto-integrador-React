import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Box as="footer" display="flex" flexDirection="column"  justifyContent="center" gap="30px" alignItems="center" margin="0 auto"  color="black">
        <Box w="100%" display="flex" flexDirection="column" alignItems="center" gap="50px" justifyContent="center">
          <Box border="1px solid #dbdbdbdb"  width="100%" height="1px"></Box>
          <Heading fontSize="6xl">DecoShop<Text as="span" color="#d09423">.</Text></Heading>
          <Box border="1px solid #dbdbdbdb" width="100%" height="1px"></Box>
        </Box>
        <Box display="flex" flexDirection={{ base: "column", md:"row"}} justifyContent="space-around" alignItems={{base: 'flex-start' , md:"center"}} width={{ base: "auto", md:"100% "}}  marginLeft="200px" marginRight="200px" >
          <Box display="flex" flexDirection="column" gap="20px" fontSize="2xl" alignItems="flex-start">
            <Link>Sobre nosotros</Link>
            <Link>Nuestra Empresa</Link>
            <Link>Nuestra Historia</Link>
            <Link>Blog</Link>
          </Box>
          <Box display="flex" flexDirection="column" gap="20px" fontSize="2xl" alignItems="flex-start">
            <Link>Información</Link>
            <Link>Envios</Link>
            <Link>Politica de Privacidad</Link>
            <Link>Terminos y condiciones</Link>
            <Link>Devoluciones</Link>
          </Box>
          <Box display="flex" flexDirection="column" gap="20px" fontSize="2xl" alignItems="flex-start">
            <Link>Soporte</Link>
            <Link>Contactenos</Link>
            <Link>Ayuda</Link>
            <Link>FAQ</Link>
            <Link>Checkout</Link>
          </Box>
        </Box>
        <Box bg="#2d5356" width="100%" height="70px" as="ul" display="flex" justifyContent="center" alignItems="center"  gap="4" >
          <Text color="white">Copyright@2025 Decoshop. Todos los derechos reservados </Text>
        </Box>
    </Box>
  )
}
