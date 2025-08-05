// import React from 'react'
// import Avatar from '../Composantgauche/Avatar'
// import image from '../../assets/image.png'
// import Nom from '../com/Nom'
// const Partiegauche:React.FC=()=> {
//   return (
// <div className='Partiegauche'>
//     <Avatar src={image} alt='bbb'/>
//     <Nom text="welborn" className=""/>
//     <Nom text="PROJECT MANAGER" className=""/>

//     <div className='aa'>
//       <h1>aaaaaaaaaaaa</h1>
//     </div>
//     </div>
//   )
// }

// export default Partiegauche

import React from 'react';
import Avatar from '../Composantgauche/Avatar';
import image from '../../assets/image.png';
import Nom from '../com/Nom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';


const Partiegauche: React.FC = () => {
  return (
    <div className="Partiegauche">
      <Avatar src={image} alt="Avatar" />

      <div className="info">
        <Nom text="NAME WILL BE HERE" className="nomY" />
        <div className="divider"></div>
        <Nom text="PROJECT MANAGER" className="role" />
      </div>

      <div className="aa footer">
        <span>Follow On</span>
        <div className="icons">
          <FaInstagram className="icon" />
          <FaFacebookF className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Partiegauche;
