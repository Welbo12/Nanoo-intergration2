import React from 'react'
import '../../style/index.css'


type boutonprops ={
    classname?:string
    label:string
    onClick:()=>void
    type?:'button'|'submit'|'reset';

}
const Bouton:React.FC<boutonprops> =({label,onClick,classname= "lo", type ="button"})=> {
  return (
    <button className={`custom-button ${classname}`} onClick={onClick} type={type}>
  {label}
    </button>

  )
}

export default Bouton
