import { Box,Text, Grid, GridItem, Heading, SimpleGrid, Button, Img, } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { randomsPick } from '../../../utils/randomsPick';
import { Link, Navigate } from 'react-router-dom';
import { Recommended } from '../../../Data/Recommended';


export const FeaturedProducts = () => {


  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const randomProducts = randomsPick(Recommended, 6);
    setFeaturedProducts(randomProducts);
  }, []);

  const handleClick = () => {
    window.scroll(0, 0);
    Navigate("/Products");
  }

  return (
    <>
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" width="100%" padding="20px">
            <Heading as="h2" fontSize="2xl" textAlign="center" margin="20px">Productos Destacados</Heading>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              maxWidth="1200px" 
              width="100%"
              padding="20px"
            
            >
              <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} justifyContent="center" width={{ base: "none", lg: "80%" }}   gap={6} p="20px">
                      {featuredProducts.map((product) => (
                          <GridItem 
                          key={product.id}
                          boxShadow="-1px -1px 12px 2px rgba(0,0,0,0.34);   "
                          borderRadius="12px"
                          w={{base:"280px", md:"325px", lg:"325px", xl:"400px"}}
                          h="auto"
                          p="20px"
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          alignItems="center"
                          textAlign="center"
                          >
                            <Img src={product.img} alt={product.nombre} w="250px" h="300px" objectFit="cover"  borderRadius="12px"/>
                            <Heading as="h3"  fontSize="3xl"> {product.nombre} </Heading>
                            <Text>{product.descripcion}</Text>
                            <Text bg="yellow.200" borderRadius="12px" p="10px" fontWeight="semibold"> $ {product.precio.toFixed(2)}</Text>
                            <Text> {product.categoria}</Text>
                            <Button to="/Products" onClick={handleClick}>
                              <Link to="/Products">Descubre más</Link>
                            </Button>
                          </GridItem>
                      ))}
              </Grid>
            </Box>
          
        </Box>

    </>
  );
};

