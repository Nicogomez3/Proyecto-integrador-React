import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </PersistGate> 
    </Provider>

  </StrictMode>,
)
