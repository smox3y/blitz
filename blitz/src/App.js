import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home.js';
import './App.css';
import Login from './Pages/Login/login.js';
import {AuthProvider, AuthContext} from "./Pages/AuthContext/AuthContext.js";

const App = () => {
    return(
        <div className="App">
            
            <Router>
                <AuthProvider>
                <Routes>
                    
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                                  
                </Routes>

                </AuthProvider>
            </Router>
      
        </div>
    );
    
};
export default App;