import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Typography } from "@material-ui/core";

import './App.css';

import { Navbar, HomePage, Cryptocurrencies, Exchanges, CryptoDetails, News } from './components' // can be imported through single line from index.js

const App = () => {
    return (
        <div className="app">
            <Router>
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="main">
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route path="/crypto/:cryptoID" element={<CryptoDetails />} />
                            <Route path="/exchanges" element={<Exchanges />} />
                            <Route path="/news" element={<News />} />
                        </Routes>
                    </div>
                    <div className="footer">
                        <Typography variant="h6">
                            MarketVerse
                        </Typography>
                        <Typography variant="subtitle2">
                            All rights reserved ©
                        </Typography>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App