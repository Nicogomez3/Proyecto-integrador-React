import { Box,Text, Grid, GridItem, Heading, SimpleGrid, Button, Img, Select, useToast, } from '@chakra-ui/react'
import { products } from '../../Data/Products'
import React, { useState } from 'react'
import Categories from '../../Components/Categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/CartSlice/cartSlice';

export const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [filter, setFilter] = useState('');
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
 const dispatch = useDispatch();
 const toast = useToast();

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
  };

  const handleShowLess = () => {
    setVisibleProducts((prevVisibleProducts)=> Math.max(prevVisibleProducts - 3, 3)) ;
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast({
      title: "Producto Añadido",
      description: `${product.nombre} se ha añadido al carrito`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right"
    });
  };

  const filteredProducts = selectedCategory === 'Todo'
    ? products
    : products.filter((product) => product.categoria === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filter === 'price-asc') {
      return a.precio - b.precio;
    } else if (filter === 'price-desc') {
      return b.precio - a.precio;
    } else if (filter === 'name-asc') {
      return a.nombre.localeCompare(b.nombre);
    } else if (filter === 'name-desc') {
      return b.nombre.localeCompare(a.nombre);
    } else {
      return 0;
    }
  });

  return (
    <>

        <Box display="flex" alignItems="center" marginTop="40px" justifyContent="center" flexDirection="column" width="100%" padding="20px">
            <Heading as="h2" fontSize="4xl" textAlign="center" margin="20px">Productos </Heading>
            <Categories/>
            <Select placeholder="Ordenar por" onChange={handleFilterChange} width="200px" marginBottom="20px">
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="name-asc">Nombre: A-Z</option>
              <option value="name-desc">Nombre: Z-A</option>
            </Select>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              maxWidth="1200px" 
              width="100%"
              padding="20px"
            
            >

              <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} justifyContent="center" width={{ base: "none", lg: "80%" }}   gap={6} p="20px">
                      {sortedProducts.slice(0, visibleProducts).map((product) => (
                          <GridItem 
                          key={product.id}
                          border="1px solid"
                           
                          w={{base:"325px", md:"325px", lg:"325px", xl:"400px"}}
                          h="auto"
                          p="20px"
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-between"
                          alignItems="center"
                          textAlign="center"
                          borderTopRightRadius="50px"
                          borderBottomLeftRadius="50px"
                          >
                            <Img src={product.img} alt={product.nombre} w="250px" h="300px" objectFit="cover"  borderRadius="12px"/>
                            <Heading as="h3"  fontSize="3xl"> {product.nombre} </Heading>
                            <Text>{product.descripcion}</Text>
                            <Text bg="yellow.200" borderRadius="12px" p="10px" fontWeight="semibold"> $ {product.precio.toFixed(2)}</Text>
                            <Text> {product.categoria}</Text>
                            <Button onClick={() => handleAddToCart(product)}>Comprar</Button>
                          </GridItem>
                      ))}
              </Grid>
            </Box>
            <Box display="Flex" justifyContent="center"
            gap="10px">
              {visibleProducts < sortedProducts.length && (
              <Button onClick={handleShowMore}>
                Ver más
              </Button> 
              )} 
              {visibleProducts > 3 && (
                <Button onClick={handleShowLess} >
                  Ver menos
                </Button>
              )}
            </Box> 
        </Box>

    </>
  );
};

