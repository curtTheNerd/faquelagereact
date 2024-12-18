import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css';
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";
import Tour from "./Components/Tour/Tour";
import About from "./Components/About/About";
import Media from "./Components/Media/Media";
import Datenschutz from "./Components/Datenschutz/Datenschutz";


const App = () => {
    return (
        <Router>
            <Background/>
            <Navbar/>
            
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/news" Component={News} />
                <Route path="/about" Component={About} />
                <Route path="/media" Component={Media} />
                <Route path="/tour" Component={Tour} />
                <Route path="/datenschutz" Component={Datenschutz} />
            </Routes>

            <Footer/>
        </Router>
    )
}

export default App;