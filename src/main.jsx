import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <AnimatePresence mode="wait" initial={true}>
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        </AnimatePresence>
    </ChakraProvider>
)
