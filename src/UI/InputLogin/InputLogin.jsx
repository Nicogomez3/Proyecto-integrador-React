import { Box, Input } from '@chakra-ui/react'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

const InputLogin = ({name, type, placeholder}) => {
  return (
    <Field name={name}>
        {({field, form: {touched, errors}}) => (
            <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" mb="20px ">
                <Input 
                {...field} type={type} className="form-control" placeholder={placeholder} 
                borderColor={errors[field.name] && touched[field.name] ? 'red.500' : 'gray.300'} 
                border="none" color="white" backgroundColor="#345f62" p="30px 10px" borderRadius="14px"
                
                />
                <ErrorMessage name={name}>
                    {(msg) => <span className="error">{msg}</span>}
                </ErrorMessage>
            </Box>
        )}
    </Field>
  )
}

export default InputLogin