import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import {  Router, Route,Routes } from 'react-router-dom';
import Favorites from "./pages/Favorites";
import Home from "./pages/home";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import { useState } from "react";



function App() {
  

  return (
    
    <div className="App">
      <Header />
    
      <Routes>
        <Route exact path="/" element={<Home/>} />\
        <Route path="/category/:category" element={<NewsCategory  />} />
        <Route path="/favorites" element={<Favorites  />} />
        <Route path="/news/:category/:year/:mounth/:day/:title/*" element={<NewsDetails  />} />
        <Route path="*" element={<Page404></Page404>} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
