import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { Layout } from '../Components/Layout/Layout'
import Home from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Contact } from '../Pages/Contact/Contact'
import { Products } from '../Pages/Products/Products'

function Routes()  {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path="/" element={<Home />} />
                {/* Nosotros */}
                <Route path="/About" element={<About />} />
                {/* Contacto */}
                <Route path="/Contact" element={<Contact />} />
                {/* Productos */}
                <Route path="/Products" element={<Products />} />
                {/* 404 not found */}
                {/* <Route path="*" element={<NoEncontrado />} /> */}
            </ReactDomRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes
