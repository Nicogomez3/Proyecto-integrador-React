import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../redux/CategoriesSlice/categoriesSlice';
import { selectCategory } from '../../redux/CategoriesSlice/categoriesSlice';

const Categories = () => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state) => state.category.selectedCategory);
    const categories = useSelector((state) => state.category.categories);

    const handleCategoryClick = (category) => {
      dispatch(selectCategory(category));
    };

    return (
      <Box display="flex" justifyContent="center" gap="10px" mb="20px">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryClick(category)}
            colorScheme={selectedCategory === category ? 'blue' : 'gray'}
          >
            {category}
          </Button>
        ))}
        {/* <Button
          onClick={() => handleCategoryClick('Todo')}
          colorScheme={selectedCategory === 'Todo' ? 'blue' : 'gray'}
        >
          Todo
        </Button> */}
      </Box>
    );
  };
  
  export default Categories;