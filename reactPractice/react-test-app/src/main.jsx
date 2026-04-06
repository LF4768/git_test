import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {FirstComponent,SecondComponent, Options} from "./Component.jsx"
import Animals from "./Rendering.jsx"
import Keys from "./Keys.jsx"
import States from "./States.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FirstComponent/>
    <SecondComponent/>  
    <Options/> */}

    {/* <Animals/> */}

    {/* <Keys/> */}
    <States/>
  </StrictMode>
)
