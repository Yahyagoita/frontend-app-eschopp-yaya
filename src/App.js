import logo from './logo.svg';
import './App.css';
import Header from './compossant/Header';
import Footer from './compossant/Footer';
import Accueil from './compossant/Accueil';
import {Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Connexion from './compossant/Connexion';
import Details from './compossant/Details';
import Inscription from './compossant/Inscription';
import { useState } from 'react';

function App() {
  const [panier, setPanier]= useState([])
  return (
  <>
    <Router>
    <Header panier={panier} />
      <Routes>
        <Route path="/" element={<Accueil panier = {panier} setPanier = {setPanier} />}></Route>
        <Route path="/details/:id" element={<Details panier = {panier} setPanier = {setPanier}  />}></Route>
        <Route path="/connexion" element={<Connexion />}></Route>
        <Route path="/inscription" element={<Inscription />}></Route>
      </Routes>
      <Footer /> 
    </Router>
  </>
  );
}

export default App;
