import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { IoLogInSharp } from "react-icons/io5";
import { RiLoginCircleFill } from "react-icons/ri";
import Logout from '../Components/Logout'

function Sidebar() {

    const authUser = true
  return (
    <aside className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-glass '>
      <nav className='h-full flex flex-col gap-3'>
        <Link to='/' className='flex justify-center'> 
          <img src='/github.svg' alt='' className='h-8'/>
        </Link>

        <Link to='/' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'> 
          <IoHomeSharp size={25}/>
        </Link>
       {authUser && (
         <Link to='/like' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'> 
         <CiHeart size={25} />
       </Link>
       )}
       
      {authUser && (
         <Link to='/explore' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'> 
         <MdOutlineExplore size={25}/>
       </Link>
      )}

{authUser && (
        <div className='flex flex-col gap-2 mt-auto'>
            <Logout />
        </div>
      )}

      {!authUser && (
           <Link to='/login' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'> 
           <IoLogInSharp size={25}/>
         </Link>
      )}

    {!authUser && (
           <Link to='/signup' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'> 
           <RiLoginCircleFill size={25}/>
         </Link>
         )} 
       
    

      </nav>
    </aside>
  )
}

export default Sidebar