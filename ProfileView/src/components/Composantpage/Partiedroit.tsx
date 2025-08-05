import React from 'react'
import Nom from '../com/Nom' 
import '../../style/index.css'
import Bouton from '../com/Bouton'
const Partiedroit:React.FC =() => {
  return (
    <div className='Partiedroit'>
        <Nom text="HELLO " className="nom"/>
         <Nom text=" EVERYONE" className="nom"/>
        <Nom text="Here's Who I am & What I do" className="DD"/>
        <div className='boton'>
          <Bouton   label="RESUME"  classname='ff'onClick={() => {}}/>
           <Bouton  label="PROJECT"  classname='ft'onClick={() => {}}/>
        </div>
        
        
        <Nom text="The About Me or Profile section of your portfolio, is a short 
        summary about yourself in relation to the type of role you are applying for.
         In the sample portfolio, the student has highlighted their program,
        the projects they've worked on and their specific area of interestin their field.
        I’m a great place for you to tell a storyand let your users knowa little more about you.
" className="Du"/>
     
    </div>
  )
}

export default Partiedroit