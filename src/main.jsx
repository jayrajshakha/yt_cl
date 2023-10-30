import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import  {YoutubeStore}  from './api/YoutubeStore.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={YoutubeStore}>
    <App />
    </Provider>
  // </React.StrictMode>,
)
