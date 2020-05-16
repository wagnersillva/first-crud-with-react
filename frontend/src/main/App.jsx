import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import Header from '../components/template/header/Header'
import Footer from '../components/template/footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'


export default props =>
    <BrowserRouter>
        <div className='app' >
            <div className='box-header-content'>
                <div className='divHeader'>
                    <Header/>
                </div>
                <div className='divContent'>
                    <Routes/>
                </div>
            </div>
            <div className='divFooter'>
                <Footer/>
            </div>
        </div>
    </BrowserRouter>