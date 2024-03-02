import React, { useEffect, useState } from 'react'
import { ChatMessage } from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addmessage } from './utils/chatSlice';
import { generateRandomName, generateRandomText } from './utils/helper';
import { TEXT_LENGTH } from './utils/constants';



export const LiveChat = () => {



    const [livemessage,setLivemessage]=useState("");

    const dispatch= useDispatch();

    const chatMessage = useSelector( (store)=> store.chat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
                

                dispatch(addmessage({
                    name:generateRandomName(),
                    message:generateRandomText(TEXT_LENGTH)
                }))

        },500)

        return ()=> clearInterval(i);

    },[])

    function handleSubmit(e){
        e.preventDefault();

        dispatch(addmessage({
            name:"Piyush Mishra",
            message:livemessage
        }))
        setLivemessage("")

    }

  return (
    <>
    <div className='flex ml-4 border border-solid border-black w-[450px] h-[600px] bg-slate-100 shadow-sm overflow-y-scroll flex-col-reverse '>
        {
            chatMessage.map((c,i)=>(

                <ChatMessage key={i} name={c.name} message={c.message}/>
            ))
        }
    </div>

     <div>
        <form className='flex justify-center items-center ml-4 border border-solid border-black h-14 w-[450px] bg-slate-100 ' onSubmit={handleSubmit}>
            <input className='ml-2 h-8 border border-solid border-black w-[400px]' value={livemessage} onChange={(e)=> setLivemessage(e.target.value)}></input>
            <button className='bg-blue-500 h-8 px-4'> Send</button>
        </form>
     </div>
    </>
  )
}
