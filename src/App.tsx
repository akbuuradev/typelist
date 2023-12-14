import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
<Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/menu"} element={<Menu/>}/>
            <Route path={"/basket"} element={<Basket/>}/>
        </Routes>
    </div>
  );
}

export default App;
