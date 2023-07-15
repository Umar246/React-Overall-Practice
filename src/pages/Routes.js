import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Header/Footer'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About/About'
import UseContext from '../Hooks/UseContext'
import UseRef from '../Hooks/UseRef'

export default function Index() {
    return (
        <>
            <BrowserRouter>
                <Header />

                    <main>
                <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/useContext/hook' element={<UseContext/>}/>
                        <Route path='/useRef/hook' element={<UseRef/>}/>
             

                       
                       
                     
                </Routes>
                    </main>
                <Footer />
            </BrowserRouter>
        </>
    )
}
