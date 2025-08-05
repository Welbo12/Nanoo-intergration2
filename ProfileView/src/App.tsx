import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/com/Header'
import Footer from './components/com/Footer'
import Partiedroit from './components/Composantpage/Partiedroit'
import PagePrincipale from './pages/PagePrincipale'
import Partiegauche from './components/Composantpage/Partiegauche'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/Header" element={<Header />} />        
            <Route path="/Footer" element={<Footer/>} />
            <Route path="/Partiedroit" element={<Partiedroit/>} />
            <Route path="/Partiegauche" element={<Partiegauche/>} />

            <Route path="/" element={<PagePrincipale/>} />


            



        </Routes>
      
    </Router>
  )
}

export default App