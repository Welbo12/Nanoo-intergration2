import React from 'react'


type TextProps ={
  
    text :string
    className?:string
}

const Nom:React.FC<TextProps> = ({ text,className }) => {
  return (
    <div className={`Text-constrainer ${className||''}`}>
        <p>{text}</p>
    </div>
  )
}

export default Nom

