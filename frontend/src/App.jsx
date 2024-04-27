import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Like from './Pages/Like'
import Login from './Pages/Login'
import Explore from './Pages/Explore'
import Signup from './Pages/Signup'
import Sidebar from './Components/Sidebar'
import { Toaster } from 'react-hot-toast'


function App() {
  

  return (
   <div className='flex text-slate-100'>
     <Sidebar />
     <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
      <Routes>
        <Route path='/' element={
          <HomePage />
        } ></Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/like' element={<Like />} />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
     </div>
   </div>
  )
}

export default App
