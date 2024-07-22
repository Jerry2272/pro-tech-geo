import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom'
import { Contact } from './pages/Contact.jsx'
import { Policy } from './pages/Policy.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
         <Route path='/' element={ <App /> } />
        <Route path='contact' element={<Contact />} />
        <Route path='policy' element={<Policy />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
