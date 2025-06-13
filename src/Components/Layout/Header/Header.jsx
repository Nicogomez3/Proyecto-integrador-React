import { Box, Button, Container, Flex, Heading, Icon, IconButton, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toggleMenu } from '../../../redux/MenuSlice/menuSlice';
import Cart from '../../Cart/Cart';
import { logoutUser } from '../../../redux/AuthSlice/authSlice';
// import { FaRegUser } from "react-icons/fa";
// import { PiSignIn } from "react-icons/pi";




export const Header = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const isMenuOpen = useSelector(state => state.menu.isOpen);
    const isOpen = useSelector((state) => state.cart.isOpen);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);



    const handleLogout = () => {
      dispatch(logoutUser());
    };

    const handleClick = () => {
      window.scroll(0, 0);
      navigate("/Products");
    }

  return (
    <>
    <Flex 
    as="header" 
    transition="background-color 0.3s ease"
    margin="0 auto"
    justifyContent="space-between"
    align="center" 
    p="0 30px 0 30px" 
    height="70px"
    position="fixed" 
    top="0" 
    left="0" 
    zIndex="10" 
    width="100%"
    bgColor="#2d5356"
    >
    
        <Heading color="white">DecoShop<Text color="#da9c1d"  as="span">.</Text> </Heading>
     
        
            <Flex 
                as="nav" 
                display= "flex" 
                color='white' 
                listStyleType="none" 
                alignItems="center"
                justifyContent="space-between"
                gap={{ base: "20px", md: "50px" }}
                
            >
              <IconButton bg="transparent" 
              icon={ isMenuOpen ? <CloseIcon /> : <HamburgerIcon color="white" fontSize="3xl" />}
              onClick={() => dispatch(toggleMenu())}
              display={{ base: "block", md: "none" }}
              aria-label="Toggle Menu"
              />
                
              <Container as='ul' 
                display={{ base: isMenuOpen ? "flex" : "none", md: "flex" }}
                flexDirection={{ base: "column", md: "row" }}
                color='white'  
                gap="4" 
                margin="0"
                fontSize={{ base: "24px", md: "16px" }}
                position={{ base: "absolute", md:"static", lg: "static" }}
                top="60px"
                right="0px"  
                padding={{ base: "40px 30px 0 0", md: "30px" }}
                zIndex="5"
                bg={{ base: "#2d5356", md:"none", lg: "none"}}
                alignItems={{ base: "flex-end", md:"center", lg: "center", xl: "center"  }}
                justifyContent={{ base: "none", md:"space-between", lg: "space-between" }}
                borderRadius={{ base: "0 0 10px 10px", lg: "none" }}
                height={{ base: "calc(100vh - 60px)", md: "auto" }}
                w={{ base: "50%", }}	
                
                >
                  <Heading as='h2' marginBottom="30px" display={{ base: "block", md:"none", lg:"none", xl:"none"}}>DecoShop</Heading>
                  
                  <Link  to="/">Inicio</Link>
                  
                
                  <Link  to="/About">Nosotros</Link>
              
              
                  <Link  to="/Contact">Contacto</Link>
            
              
                  <Link  to="/Products" onClick={handleClick}>Productos</Link>
                  {loggedInUser ? (
                <Container display="flex" padding="0" flexDirection={{ base: "column", md:"row" }} alignItems={{ base: "flex-end", md:"center" }} gap="10px">
                    <Text color="white">
                      {loggedInUser.name}
                    </Text>
                    <Button 
                      bg="#da9c1d"
                      color="white"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </Button>
                </Container>  
                  ) : (
                   <> 
                   
                  <Button 
                    bg="transparent" 
                    _focus={{ boxShadow: 'none' }} 
                    _hover={{ bg: 'transparent' }}  
                    color="white"
                    minWidth={{ base: "auto", md: "150px" }}
                  > 
                    <Link color='white' to="/login">Iniciar Sesión</Link>
                    
                  </Button>

                  <Button 
                    bg="transparent"
                    _focus={{ boxShadow: 'none' }} 
                    _hover={{ bg: 'transparent' }}  
                    color="white" 
                  >
                   <Link color='white' to="/register">Registrarse</Link>
                  </Button>
                  </> 
              )}   
              </Container>

             

              <Container as='div'cursor="pointer" color="white" fontSize='24px' width="0px" padding="0px" marginInlineStart="0px" marginEnd="0px" marginStart="0px" marginInlineEnd="0px"       paddingRight="30px">
               <Cart/>
              </Container>
              
      
                       
            </Flex>

            
        
    </Flex>    
        
    </>
  )
}

