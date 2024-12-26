import { Box, Button, Container, Flex, Heading, Icon, IconButton } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toggleMenu } from '../../../redux/MenuSlice/menuSlice';
import Cart from '../../Cart/Cart';
// import { FaRegUser } from "react-icons/fa";
// import { PiSignIn } from "react-icons/pi";




export const Header = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);
    const [headerBg, setHeaderBg] = useState('transparent');
    const [isHovered, setIsHovered] = useState(false);
    const [headingColor, setHeadingColor] = useState('black');
    const [linkColor, setLinkColor] = useState('transparent')

    const handleClick = () => {
      window.scroll(0, 0);
      navigate("/Products");
    }

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setHeaderBg('#0000008a');
          setLinkColor('white');
          setHeadingColor('white');
        } else {
          setHeaderBg('transparent');
          setLinkColor('transparent');
          setHeadingColor('black');
        }
      }

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [isHovered]);

    const handleMouseEnter = () => {
      setIsHovered(true);
      setHeaderBg('#0000008a');
      setHeadingColor('white');
      setLinkColor('white');
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (window.scrollY <= 20) {
        setHeaderBg('transparent');
      }
      setHeadingColor('black');
      setLinkColor('transparent');
    };    

  return (
    <>
    <Flex 
    as="header" 
    bg={headerBg}
    transition="background-color 0.3s ease"
    margin="0 auto"
    justifyContent="space-between"
    align="center" 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    p="0 30px 0 30px" 
    height="60px"
    position="fixed" 
    top="0" 
    left="0" 
    zIndex="10" 
    width="100%"
    >
    
        <Heading style={{color: headingColor, transition: 'color 0.3s ease'}}>DecoShop</Heading>
     
        
            <Flex 
                as="nav" 
                display= "flex" 
                color='white' 
                listStyleType="none" 
                alignItems="center"
                justifyContent="space-between"
                
                
            >
              <IconButton bg="transparent" 
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="3xl" />}
              onClick={() => dispatch(toggleMenu())}
              display={{ base: "block", md: "none" }}
              aria-label="Toggle Menu"
              />
                
              <Container as='ul' 
                display={{ base: isOpen ? "flex" : "none", md: "flex" }}
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
                bg={{ base: "#0000008a", md:"transparent", lg: "transparent"}}
                alignItems={{ base: "flex-end", md:"center", lg: "center", xl: "center"  }}
                justifyContent={{ base: "none", md:"space-between", lg: "space-between" }}
                borderRadius={{ base: "0 0 10px 10px", lg: "none" }}
                height={{ base: "calc(100vh - 60px)", md: "auto" }}
                w={{ base: "50%",  }}	
                >
                  <Heading as='h2' marginBottom="30px" display={{ base: "block", md:"none", lg:"none", xl:"none"}}>DecoShop</Heading>
                  
                  <Link style={{color: linkColor, transition: 'color 0.3s ease'}} to="/">Inicio</Link>
                  
                
                  <Link style={{color: linkColor, transition: 'color 0.3s ease'}} to="/About">Nosotros</Link>
              
              
                  <Link style={{color: linkColor, transition: 'color 0.3s ease'}} to="/Contact">Contacto</Link>
            
              
                  <Link style={{color: linkColor, transition: 'color 0.3s ease'}} to="/Products" onClick={handleClick}>Productos</Link>

                  <Button 
                    bg="transparent" 
                    _focus={{ boxShadow: 'none' }} 
                    _hover={{ bg: 'transparent' }}  
                    marginInlineStart="30px" 
                    textAlign="center"
                    color="white"
                  > 
                    <Link style={{color: linkColor, transition: 'color 0.3s ease'}} to="/SignIn">Iniciar Sesión</Link>
                    
                  </Button>

                  <Button 
                    bg="transparent"
                    _focus={{ boxShadow: 'none' }} 
                    _hover={{ bg: 'transparent' }}  
                    color="white" 
                    marginInlineStart="50px" 
                    textAlign="center" 
                  > 
                    <Link style={{color: linkColor, transition: 'color 0.3s ease'}} to="/SignUp">Registrarse</Link>
                  </Button>

                  {/* <Box as='div' display="flex" gap="4" alignItems="center"  color="white" fontSize='18px' marginInlineStart="50px">
                    {/* <FaRegUser />
                    <PiSignIn /> */}
{/*                     
                      <Link to="/SignIn" display="inline-flex" >Iniciar Sesión</Link>
                    
                    
                    <Link to="/SignUp">Registrarse</Link>
                  </Box> */} 

                 
              </Container>

             

              <Container as='div'cursor="pointer" color="white" fontSize='24px' w="0%" marginInlineStart="0px" marginEnd="0px" marginStart="0px" marginInlineEnd="0px" >
               <Cart/>
              </Container>
              
      
                       
            </Flex>

            
        
    </Flex>    
        
    </>
  )
}

