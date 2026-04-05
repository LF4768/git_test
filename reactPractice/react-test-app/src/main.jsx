import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {FirstComponent,SecondComponent, Options} from "./Component.jsx"
import Animals from "./Rendering.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FirstComponent/>
    <SecondComponent/>  
    <Options/> */}

    <Animals/>
  </StrictMode>,
)
