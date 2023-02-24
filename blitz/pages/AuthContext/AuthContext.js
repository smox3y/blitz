import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import qs from 'qs';
import * as fs from 'fs';
import axios from 'axios';
import * as FormData from 'form-data';
import cors from 'cors';

import { getSystemErrorMap } from "util";


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const loginUser = async (email, password) => {
   
    var data = JSON.stringify({
        
       "email": email,
       "password": password
    });

    var config = {
        method: 'POST',
        withCredentials: false,
        url: 'http://127.0.0.1:8000/auth/token/login',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data : data
    };

    
    axios(config)
    .then(function (response){
        console.log(JSON.stringify(response.data));
        navigate('/mastercalendar');
    })
    .catch(function (error){
        console.log(error)
    });

  
  };
  
  
  const registerUser = async (email, first_name, last_name, password, username, re_password) => {
    
    var data = JSON.stringify({
        
        "username": username,
        "phone": "8884444444",
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
        "re_password": re_password
    });

    var config = {
        method: 'POST',
        withCredentials: false,
        url: 'http://127.0.0.1:8000/auth/users/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data : data
    };

    
    axios(config)
    .then(function (response){
        console.log(JSON.stringify(response.data));
        
    })
    .catch(function (error){
        console.log(error)
    });
    
  };

  const uploadSyllabus = async (fileObj) => {
    //var axios = require('axios');
    var FormData = require('form-data');
    
    var data = new FormData();
    data.append('file', fileObj, fileObj.name);
    
    var config = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/auth/upload',
     
      headers: { 
        'filename': fileObj.name, 
        'Content-Disposition': 'attachment; filename=' + fileObj.name,
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(config);
      console.log(error);
    });

};
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate('/');
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
    uploadSyllabus
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};