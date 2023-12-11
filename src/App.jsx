import React from "react";
import Header from "./Composant/Header.jsx";
import Footer from "./Composant/Footer.jsx";
import HeaderCarousel from "./Composant/HeaderCarousel.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div>
     <Header /> 
     <HeaderCarousel />
     <Footer />    
    </div>
    );
};


export default App;
