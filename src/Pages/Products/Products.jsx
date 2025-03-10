import { Box, Text, Grid, GridItem, Heading, Button, Img, Select, useToast } from '@chakra-ui/react';
import { products as productsData } from '../../Data/Products';
import React, { useEffect, useState } from 'react';
import Categories from '../../Components/Categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/CartSlice/cartSlice';
import { setProducts } from '../../redux/ProductSlice/productSlice';

export const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [productsToShow, setProductsToShow] = useState(6); // Número inicial de productos a mostrar
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    // Despacha la acción para establecer los productos en el estado de Redux
    dispatch(setProducts(productsData));
  }, [dispatch]);

  useEffect(() => {
    // Filtra los productos según la categoría seleccionada
    let filteredProducts = [...products]; ;
    if (selectedCategory && selectedCategory !== 'Todo') {
      filteredProducts = products.filter(product => product.categoria === selectedCategory);
    }
    // Aplica el filtro de orden
    if (filter === 'price-asc') {
      filteredProducts.sort((a, b) => a.precio - b.precio);
    } else if (filter === 'price-desc') {
      filteredProducts.sort((a, b) => b.precio - a.precio);
    } else if (filter === 'name-asc') {
      filteredProducts.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (filter === 'name-desc') {
      filteredProducts.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
    setVisibleProducts(filteredProducts.slice(0, productsToShow)); // Mostrar solo los productos necesarios
  }, [products, selectedCategory, filter, productsToShow]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast({
      title: 'Producto añadido al carrito',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleShowMore = () => {
    setProductsToShow(productsToShow + 6); // Incrementa el número de productos a mostrar
  };

  const handleShowLess = () => {
    setProductsToShow(Math.max(productsToShow - 6, 6)); // Decrementa el número de productos a mostrar, pero no menos de 6
  };

  return (
    <Box display="flex" alignItems="center" marginTop="40px" justifyContent="center" flexDirection="column" width="100%" padding="20px">
      <Heading as="h2" fontSize="4xl" textAlign="center" margin="20px">Productos</Heading>
      <Categories />
      <Select placeholder="Ordenar por" onChange={handleFilterChange} width="200px" marginBottom="20px">
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
        <option value="name-asc">Nombre: A-Z</option>
        <option value="name-desc">Nombre: Z-A</option>
      </Select>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} justifyContent="center" p="20px" gap={6} width={{ base: "none", lg: "80%" }}>
        {visibleProducts.map((product) => (
          <GridItem key={product.id} 
          borderWidth="1px" 
          borderRadius="lg" 
          display="flex"
          flexDirection="column"
          justifyContent="center" 
          alignItems="center"
          textAlign="center" 
          overflow="hidden" 
          p="6" 
          m="4"
          w={{base:"280px", md:"325px", lg:"325px", xl:"400px"}}
          >
            <Img src={product.img} alt={product.nombre} w="250px" h="300px" objectFit="cover" borderRadius="12px" />
            <Heading as="h3" fontSize="3xl">{product.nombre}</Heading>
            <Text>{product.descripcion}</Text>
            <Text bg="yellow.200" borderRadius="12px" p="10px" fontWeight="semibold">$ {product.precio.toFixed(2)}</Text>
            <Text>{product.categoria}</Text>
            <Button onClick={() => handleAddToCart(product)}>Comprar</Button>
          </GridItem>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop="20px">
        {productsToShow < products.length && (
          <Button onClick={handleShowMore} marginRight="10px">
            Mostrar más
          </Button>
        )}
        {productsToShow > 6 && (
          <Button onClick={handleShowLess}>
            Mostrar menos
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Products;