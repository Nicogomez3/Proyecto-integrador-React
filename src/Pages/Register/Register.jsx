import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { registerInitialValues } from '../../Formik/initialValues'
import { registerValidationSchema } from '../../Formik/validationSchema'
import InputLogin from '../../UI/InputLogin/InputLogin'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  registerUser } from '../../redux/AuthSlice/authSlice'
import useRedirect from '../../Hooks/useRedirect'

const Register = () => {
    const { state } = useLocation()
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useRedirect(state?.registerFromCheckout ? '/checkout' : '/login');
    const redirectTo = state?.redirectFromCheckout ? '/checkout' : '/login';

    

    // const handleRegister = async (values) => {
    //     // Ejecuta el dispatch y asegura que se complete antes de redirigir
    //     await dispatch(registerUser(values)); 
    //     console.log("Usuario registrado:", values); // Confirmar datos registrados
    //     if (redirectTo) {
    //       navigate(redirectTo); // Redirige si `redirectTo` tiene un valor
    //     } else {
    //       navigate('/login'); // Si no hay `redirectTo`, envía al inicio
    //     }
    //   };

    const handleRegister = async (values) => {
        await dispatch(registerUser(values)); // Registra al usuario
        console.log("Usuario registrado:", values); // Registro para depuración
        console.log("Usuario registrado:", values);
        navigate(redirectTo); // Redirige al destino configurado
      };


  return (
    <Container as="section" width="100%" height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Heading as="h1">Registrate</Heading>
        <Box width="100%" mt="40px" bg="#2d5356" p="30px" borderRadius="14px" >
            <Formik 
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleRegister}
            >
                {({ isValid, dirty}) => (
                <Form >
                    <InputLogin name="name" type="text" placeholder="Nombre"/>
                    <InputLogin name="lastName" type="text" placeholder="Apellido"/>
                    <InputLogin name="phone" type="text" placeholder="Teléfono"/>
                    <InputLogin name="email" type="email" placeholder="Email"/>
                    <InputLogin name="password" type="password" placeholder="Contraseña"/>
                    <InputLogin name="confirmPassword" type="password" placeholder="Confirmar contraseña"/>

                    <Box display="flex" gap="20px" alignItems="center">
                        <Link to="/login">
                            <Text color="white" textDecoration="underline">Ya tengo cuenta</Text>
                        </Link>
                        <Button type="submit" outline="none" backgroundColor="#da9c1d" _hover={{backgroundColor: "#ebc16b"}} color="white" disabled={!(isValid && dirty)} >Registrarme</Button>
                    </Box>
                   
                </Form>
            )}

            </Formik>
        </Box>
       
    </Container>
  )
}

export default Register