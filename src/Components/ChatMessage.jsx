import React from 'react'

export const ChatMessage = ({name,message}) => {
  return (
    <div className='flex mt-2 ml-2 items-center shadow-sm'>
        
        <img className =" w-8 h-8 rounded-full" src=" https://i.ibb.co/vcmKwkc/guest.png" alt="guest"></img>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}
