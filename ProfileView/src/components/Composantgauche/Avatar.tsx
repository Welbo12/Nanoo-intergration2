import React from 'react'


type avatarProps ={
    src : string
    alt : string
}
const Avatar:React.FC <avatarProps> =({ src , alt }) => {
  return (
    <img src={src} alt={alt} />
  )
}

export default Avatar