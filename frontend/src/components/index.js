import React from 'react'
import { Route, Routes } from 'react-router-dom'

import '../assets/css/index.css'

import UserData from '../data/userdata'

import Header from './header/header'
import Home from './home/home'

const Index = () => {

    return (
        <div className='project-main-container'>
            <Header userdetails={UserData} />
            <div className='project-section-container'>
                <Routes >
                    <Route path='/' element={<Home userdetails={UserData} />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Index;
