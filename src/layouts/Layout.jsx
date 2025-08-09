import React from 'react'
import { Outlet } from 'react-router'

import Navbar from '../componentes/Navbar'
import Footer from '../componentes/Footer'

function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer />  
        </>
    )
}

export default Layout