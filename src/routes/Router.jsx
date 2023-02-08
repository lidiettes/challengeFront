import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BabyPage from '../pages/BabyPage'
import CatPage from '../pages/CatPage'
import FilePage from '../pages/FilePage'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import NicolasCagePage from '../pages/NicolasCagePage'

import UploadPage from '../pages/UploadPage'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element= {<Home /> }/>
        <Route path="/login" element= {<LoginPage /> }/>
        <Route path="/upload" element= {<UploadPage /> }/>
        <Route path="/file" element= {<FilePage /> }/>

        <Route path="/cats" element= {<CatPage /> }/>
        <Route path="/nicolascagefaces" element= {<NicolasCagePage /> }/>
        <Route path="/babyPage" element= {<BabyPage /> }/>


    </Routes>
  )
}

export default Router