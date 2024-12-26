import React from "react";
import App from "../App";
import {  Route, Routes } from 'react-router-dom';
import ChatPage from "../components/ChatPage";

const AppRoutes=()=>{

    return (<Routes>
    <Route path="/" element={<App />} />
    <Route path="/chat" element={<ChatPage/>} />
    <Route path="/*" element={<h1>404 Page not found!</h1>} />
  </Routes>);


};

export default AppRoutes; 