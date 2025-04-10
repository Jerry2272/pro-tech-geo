import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom'
import { Contact } from './pages/Contact.jsx'
import { About } from './pages/About.jsx'
import { Geo } from './pages/Geo.jsx'
import { HydroGraphics } from './pages/HydroGraphics.jsx'
import { Survey } from './pages/Survey.jsx'
import { ProcureMent } from './pages/Procurement.jsx'
import { GisServices } from './pages/GisServices.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
         <Route path='/' element={ <App /> } />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/geo' element={<Geo />} /> 
        <Route path='/hydroGraphics' element={<HydroGraphics />} /> 
        <Route path='/survey' element={<Survey />} /> 
        <Route path='/procureMent' element={<ProcureMent />} /> 
        <Route path='/gisMapping' element={<GisServices />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
)
