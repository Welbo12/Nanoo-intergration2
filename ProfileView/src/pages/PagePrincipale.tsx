import React from 'react'
import '../style/index.css'
import Header from '../components/com/Header'
import Footer from '../components/com/Footer'
import Partiedroit from '../components/Composantpage/Partiedroit'
import Partiegauche from '../components/Composantpage/Partiegauche'


const PagePrincipale:React.FC = function () {
  return (
    <div className='PagePrincipale'>
        <Header/>
        <div className='cont'>
            <Partiegauche/>
            <Partiedroit/>
        </div>
        <Footer/>
    </div>

  )
}

export default PagePrincipale