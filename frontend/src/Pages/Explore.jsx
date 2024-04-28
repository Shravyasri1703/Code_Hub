import React, { useState } from 'react'
import Spinner from '../Components/Spinner'
import Repos from '../Components/Repos'
function Explore() {

  //https://api.github.com/search/repositories?q=language:javascript&sort=stars&order&per_page=10
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [selectedLanguage, setselectedLanguage] = useState('')
    

  const exploreRepos = async (language) => {
    setLoading(true)
    setRepos([])
    try{
       const res = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order&per_page=10`)
       const data = await res.json()
       setRepos(data.items)
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div className='px-4'>
    <div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
        <h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
        <div className='flex flex-wrap gap-2 my-2 justify-center'>
            <img src='/javascript.svg' alt='JavaScript' className='h-11 sm:h-20 cursor-pointer'
             onClick={()=> exploreRepos('javascript')}
            />
            <img src='/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer'
                onClick={()=> exploreRepos('typescript')}
            />
            <img src='/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer' 
                  onClick={()=> exploreRepos('c++')}
            />
            <img src='/python.svg' alt='Python logo' className='h-11 sm:h-20 cursor-pointer' 
                 onClick={()=> exploreRepos('python')}
            />
            <img src='/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer'
                  onClick={()=> exploreRepos('java')}
            />
        </div>
        { repos.length > 0 && (
          <h2 className='text-lg font-semibold text-center my-4'>
            <span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full'>
              {selectedLanguage.toUpperCase()}{""}
            </span>
          </h2>
        )}
        { !loading && repos.length > 0 && <Repos repos={repos} />}
        { loading && (
          <Spinner />
        )}
    </div>
</div>
  )
}

export default Explore