import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css';
import Background from "./Components/constants/Background/Background";
import Navbar from "./Components/constants/Navbar/Navbar";
import Footer from "./Components/constants/Footer/Footer";
import Home from "./Components/pages/Home";
import Tour from "./Components/pages/Tour";
import About from "./Components/pages/About";
import Media from "./Components/pages/Media";
import Datenschutz from "./Components/pages/Datenschutz";


const App = () => {
    return (
        <Router>
            <Background/>
            <Navbar/>
            
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/tour" Component={Tour} />
                <Route path="/media" Component={Media} />
                <Route path="/datenschutz" Component={Datenschutz} />
            </Routes>

            <Footer/>
        </Router>
    )
}

export default App;