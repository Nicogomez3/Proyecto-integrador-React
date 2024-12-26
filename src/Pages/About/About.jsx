import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <div>
      <Container
      bgImage="/img/about.jpg"
      bgSize="cover"
      maxWidth="none"
      height="100vh"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      flexDirection={{base:'column', lg:'row'}}
      justifyContent={{base:'center', lg:'space-between'}}
      alignItems={{base:'flex-start', lg:'flex-end'}}
      >
        <Heading as="h1" color="white" fontSize={{base:'4xl', sm:'5xl', md:'6xl', lg:'8xl'}} p="20px" >
          <Text as="span" fontWeight="700" fontSize={{base:'4xl', sm:'5xl', md:'6xl', lg:'8xl'}} display="block" color="white" >Sobre</Text>
          <Text as="span" fontWeight="700" fontSize={{base:'4xl', sm:'5xl', md:'6xl', lg:'8xl'}} color="white" >Nosotros</Text>
        </Heading>
        <Container  as="section" maxW="600px" margin="0" p="20px" display="flex" flexDirection="column" >
          <Text as="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, debitis. Magnam fuga harum, alias sed voluptates iure et iste facilis minima minus, dignissimos dolorem reprehenderit asperiores iusto nemo quas cupiditate?
          </Text>
          <Text as="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, debitis. Magnam fuga harum, alias sed voluptates iure et iste facilis minima minus, dignissimos dolorem reprehenderit asperiores iusto nemo quas cupiditate?
          </Text>
          <Text as="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, debitis. Magnam fuga harum, alias sed voluptates iure et iste facilis minima minus, dignissimos dolorem reprehenderit asperiores iusto nemo quas cupiditate?
          </Text>
          
        </Container>
      </Container>

    </div>
  )
}

