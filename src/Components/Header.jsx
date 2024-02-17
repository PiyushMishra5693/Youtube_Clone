import React, { useEffect, useState } from 'react'
import { FaYoutube } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { toggleMenu } from './utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_RESULT } from './utils/constants';
import { cacheResults } from './utils/searchSlice';
import { DarkMenu } from './utils/appSlice';




const Header = () => {

  const [searchQuery,setSearchQuery]=useState("");
  const [suggetion,setSuggestion]= useState([]);  
  const [showsuggestion,Setshowsuggestion]= useState(false);

  const searchCache= useSelector (store => store.search);

  const IsDark = useSelector(store => store.app.IsDarkMode);

  console.log(IsDark);

  
  const dispatch = useDispatch();
  
  const toggleMenuHandler= ()=>{

    dispatch(toggleMenu());
  }

  
  const handleDarkMode = ()=>{
    dispatch(DarkMenu());
  }
  
  useEffect(()=>{

    
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery])
          setSuggestion(searchCache[searchQuery])
      else getSearchSuggestion()
    
    },200);

    return ()=>{
        clearTimeout(timer);
    }

  },[searchQuery])

  async function getSearchSuggestion(){
        const data = await fetch(YOUTUBE_SEARCH_RESULT+searchQuery);
        const json = await data.json();

        setSuggestion(json[1]);
        dispatch(cacheResults({
          [searchQuery]:json[1]
        }));
  }
  
  return (

    <div className={'flex w-screen h-20 '+(IsDark?"bg-[rgb(15,15,15)]":"bg-white")}>
      
      
      <div className='flex'>


          <div className='' >
                <RxHamburgerMenu onClick={()=> toggleMenuHandler()} className={'text-4xl m-4  cursor-pointer ' +(IsDark?'text-white':'text-[rgb(15,15,15)')}/>
          </div>
          <div className='flex m-4'>
                <FaYoutube className={' text-red-600 text-4xl '}/>
                <h1 className={'text-2xl font-bold '+(IsDark?'text-white':'text-[rgb(15,15,15)')}>Youtube</h1>
          </div>
            
        </div>

        <div className='flex m-4'>


            <div className='flex flex-col'>
                <input   className={'w-[500px] h-[40px] ml-[250px] p-4   bg-gray-400  focus:border-[3px] border-blue-700 focus:outline-none  rounded-l-full'}

                value={searchQuery}
                onChange={(e)=> {setSearchQuery(e.target.value)}}
                onFocus={()=>Setshowsuggestion(true)}
                onBlur={()=>Setshowsuggestion(false)}
                >
                </input>

              <div>
             { showsuggestion &&(
              <ul className='fixed py-4 ml-[250px] w-[500px] rounded-xl bg-[#0f0f0f]'>
          
              
              {
                suggetion.map((s)=>(
                  <div key={s} className='flex hover:bg-gray-800 cursor-pointer'>
                  <CiSearch className='mt-[10px] ml-4  w-[20px] h-[20px] text-white'/>
                  <li className=' ml-2 py-2 text-white'>{s}</li>
                  </div>
                ))
              }
              
             
             </ul>)
            } 
             </div>

            </div>
            
            <button className='h-[40px] bg-stone-700 rounded-r-full'> 
                <CiSearch className='w-[50px] text-white '/>
            </button>          
      </div>

     


      <div className='flex w-4/12   h-20  justify-end' >

        <div className='flex  '>

       {IsDark? (<MdDarkMode className='mt-5 mr-[50px] w-[40px] h-[40px] text-white cursor-pointer' onClick={handleDarkMode}/>)
          :(<CiSun className='mt-5 mr-[50px] w-[40px] h-[40px] text-black cursor-pointer' onClick={handleDarkMode}/>)}

        <IoMdNotifications className={'mt-5 mr-[50px] w-[40px] h-[40px] '+(IsDark?'text-white':'text-[rgb(15,15,15)')}/>
      
        <img className= "mt-5 mr-[50px] w-[40px] h-[40px] rounded-full " src=" https://i.ibb.co/vcmKwkc/guest.png" alt="" />
       
        </div>


      </div>
       
   

      


    </div>
  )
}

export default Header;


/*
    Header
            Hamburger icon
            Youtube icon
            Search bar with button 

*/
