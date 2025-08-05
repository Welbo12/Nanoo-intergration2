import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/index.css'
import  Nom from './Nom'

type HeaderProps = {
  label: string;
  path: string;
}
const headerProps: HeaderProps[] = [
  { label: 'ABOUT ME', path: '/' },
  { label: 'RESUME', path: '/profile' },
  { label: 'PROJECT', path: '/settings' },
  { label: 'CONCTACT', path: '/contact' },
]

const Header: React.FC = () => {
  return (
    <div className='header'>
< Nom text ="NAME HERE / PRODUCT DESIGNER" className="nomN"/>

    <nav className='navbar'>
        <ul className='nav-links'> {headerProps.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}</ul>
      </nav>
      </div>
  )
}

export default Header 