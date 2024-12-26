import { Button, Container, FormControl, FormLabel, Heading, Input, TagLabel, Textarea } from '@chakra-ui/react'
import React from 'react'

export const Contact = () => {
  return (
    <>
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="4"
      height="100vh"
    >
        <Heading as="h1">
            Contacto
        </Heading>
        <FormControl isRequired>
            <FormLabel >Nombre</FormLabel>
            <Input placeholder='Nombre' type="text" />
            <FormLabel>Apellido</FormLabel>
            <Input placeholder='Apellido' type="text" />
            <FormLabel>Email</FormLabel>
            <Input placeholder='Correo Electronico' type="email" />
            <FormLabel>Mensaje</FormLabel>
            <Textarea placeholder='Escribe lo que quieras...' name="mensaje" id="mensaje" cols="30" rows="10"></Textarea>
            <Button type="submit" colorScheme="teal" marginTop="20px">Enviar</Button>
        </FormControl>
    </Container>

    </>
  )
}

