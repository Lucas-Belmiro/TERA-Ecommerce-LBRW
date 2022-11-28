import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Rotas from './Routes/Rotas'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Componentes/ScrollToTop'
import { CartProvider } from './Providers/CartProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <ScrollToTop></ScrollToTop>
                <Rotas></Rotas>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
)

reportWebVitals()
