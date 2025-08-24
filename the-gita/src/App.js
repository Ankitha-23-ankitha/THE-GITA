import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Chapter from './components/Chapter';
import Verse from './components/Verse';


function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/chapter/:chapter' element={ <Chapter /> } />
                    <Route path='/chapter/:chapter/verse/:verse' element={ <Verse /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
