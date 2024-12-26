import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../redux/CategoriesSlice/CategoriesSlice';

const Categories = () => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state) => state.category.selectedCategory);
    const categories = ['Todo', 'Muebles', 'Iluminación', 'Decoración', 'Electrodomésticos'];


  return (
    <Box display="flex" justifyContent="center" gap="10px" mb="20px">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => dispatch(setCategory(category))}
          colorScheme={selectedCategory === category ? 'blue' : 'gray'}
        >
          {category}
        </Button>
      ))}
    </Box>
  )
}

export default Categories