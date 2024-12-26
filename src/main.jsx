import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import AppRoutes from './config/Routes';
import { Toaster } from 'react-hot-toast';
import { ChatProvider } from "./context/ChatContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Toaster/>
    <ChatProvider>
      <AppRoutes />
    </ChatProvider>
    </BrowserRouter>
  
);
